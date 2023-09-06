import { createSignal, type Component, For, Show } from 'solid-js';
import animateScrollTo from 'animated-scroll-to';

import { CommonLayout } from '../components/common/layout';
import { PageHeader } from '../components/common/pageHeader';
import { QuestionIcon } from '../components/core/icon/question';
import { readCsvFileAsync, readFileAsync } from '../helper/fileHelper';
import { anyObject } from '../helper/typescriptHacks';
import { lowercaseFirstLetter } from '../helper/stringHelper';
import { IPatreonExport } from '../contracts/patreonExport';
import { IYoutubeMemberExport } from '../contracts/youtubeMemberExport';
import { RangeSlider } from '../components/core/rangeSlider';
import { IGenericSupporter } from '../contracts/genericSupporter';
import { GenericSupporterTile } from '../components/core/genericSupporterTile';
import { Checkbox } from '../components/core/checkbox';
import { ColourPicker } from '../components/core/colourPicker';
import { Dropdown } from '../components/core/dropdown';
import { MultipleChoiceDropdown } from '../components/core/multipleChoiceDropdown';
import { onlyUniqueFilter } from '../helper/arrayHelper';
import { openFullscreen, startRecording } from '../helper/documentHelper';

export const SupporterPage: Component = () => {
    const [numPerRow, setNumPerRow] = createSignal<number>(5);
    const [showTiers, setShowTiers] = createSignal<boolean>(true);
    const [bgColour, setBgColour] = createSignal<string>('#00000080');
    const [fontColour, setFontColour] = createSignal<string>('#f0f0f0');
    const [textAlign, setTextAlign] = createSignal<string>('left');
    const [tierFilter, setTierFilter] = createSignal<Array<string>>([]);

    const [isRecording, setIsRecording] = createSignal<boolean>(false);

    const [patrons, setPatrons] = createSignal<Array<IGenericSupporter>>([]);
    const [youtubeMembers, setYoutubeMembers] = createSignal<Array<IGenericSupporter>>([]);

    const handlePatreon = async (event: any) => {
        const files = event?.target?.files ?? [];
        const file = files[0];
        const csvFileContent = await readCsvFileAsync<IPatreonExport>(file);
        const items = csvFileContent.filter(c => c.patronStatus === 'Active patron');
        const ordered = items.sort((a, b) => b.lifetimeAmount - a.lifetimeAmount);

        const combined: Array<IGenericSupporter> = [];
        for (const item of ordered) {
            const mapped: IGenericSupporter = {
                title: item.name,
                tier: item.tier.length > 0 ? item.tier : '---',
            };
            combined.push(mapped);
        }
        setPatrons(combined);
        setTierFilter((prev: Array<string>) => {
            const newV: Array<string> = [...prev, ...combined.map(i => i.tier)];
            return newV.filter(onlyUniqueFilter);
        });
    }

    const handleYoutubeMember = async (event: any) => {
        const files = event?.target?.files ?? [];
        const file = files[0];
        const csvFileContent = await readCsvFileAsync<IYoutubeMemberExport>(file);

        const combined: Array<IGenericSupporter> = [];
        for (const item of csvFileContent) {
            const mapped: IGenericSupporter = {
                title: item.member,
                tier: item.currentlevel ?? '',
            };
            combined.push(mapped);
        }
        setYoutubeMembers(combined.sort((a, b) => a.tier.localeCompare(b.tier) || a.title.localeCompare(b.title)));
        setTierFilter((prev: Array<string>) => {
            const newV: Array<string> = [...prev, ...combined.map(i => i.tier)];
            return newV.filter(onlyUniqueFilter);
        });
    }

    const recordScreen = async () => {
        const bottomElem: any = document.querySelector('#bottom');
        if (bottomElem == null) return;

        const supporterElem: any = document.querySelector('#supporter-display');
        if (supporterElem == null) return;
        openFullscreen(document.documentElement)

        const now = new Date();
        // const stopFunc = await startRecording(`supporter-list-${now.getFullYear()}-${now.getMonth().toFixed(2)}-${now.getDate().toFixed(2)}`);
        setIsRecording(true);

        const options = {
            cancelOnUserAction: true,
            elementToScroll: window,
            minDuration: 250,
            maxDuration: 50000,
            speed: 10000,
            easing: (t: any) => { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
        };
        animateScrollTo(bottomElem, options).then(hasScrolledToPosition => {
            if (hasScrolledToPosition) {
                // stopFunc();
                setIsRecording(false);
                openFullscreen(document.documentElement);
            }
        });
    }

    return (
        <CommonLayout>
            <Show when={isRecording() == false}>
                <PageHeader text="Display Supporters"></PageHeader>

                <div class="container mx-auto my-8 text-center">
                    <div class="flex justify-center">
                        <div class="card bg-primary mx-2 text-primary-content shadow-xl" style={{ 'background-color': '#f96854' }}>
                            <div class="card-body text-left">
                                <h2 class="card-title">Patreon</h2>
                                <div class="flex justify-between w-full">
                                    <p>Upload Patreon supporter export (csv)</p>
                                    <QuestionIcon />
                                </div>
                                <div class="card-actions justify-end">
                                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" onChange={handlePatreon} />
                                </div>
                            </div>
                        </div>

                        <div class="card bg-primary mx-2 text-primary-content shadow-xl" style={{ 'background-color': '#DD0000' }}>
                            <div class="card-body text-left">
                                <h2 class="card-title">Youtube Members</h2>
                                <p>Upload Youtube Members export (csv)</p>
                                <div class="card-actions justify-end">
                                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" onChange={handleYoutubeMember} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mx-auto my-16 text-center">
                    <h3 class="text-xl mb-4">Controls</h3>
                    <p class="mb-2">Number of supporters per row</p>
                    <RangeSlider
                        options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                        initialPosition={numPerRow()}
                        onChange={newValue => setNumPerRow(newValue)}
                    />
                    <div class="m-8"></div>
                    <div class="inline-flex flex-wrap">
                        <Checkbox
                            title="Show tiers"
                            value={showTiers()}
                            onChange={setShowTiers}
                        />
                        <div class="divider divider-horizontal"></div>
                        <ColourPicker
                            title="Background colour"
                            value={bgColour()}
                            onChange={setBgColour}
                        />
                        <div class="divider divider-horizontal"></div>
                        <ColourPicker
                            title="Background colour"
                            value={fontColour()}
                            onChange={setFontColour}
                        />
                        <div class="divider divider-horizontal"></div>
                        <Dropdown
                            title="Text align"
                            value={textAlign()}
                            options={['left', 'center', 'right']}
                            onChange={setTextAlign}
                        />
                        <Show when={[...patrons(), ...youtubeMembers()].length > 0}>
                            <div class="divider divider-horizontal"></div>
                            <MultipleChoiceDropdown
                                title="Tiers to display"
                                values={tierFilter()}
                                options={[...patrons(), ...youtubeMembers()].map(i => i.tier).filter(onlyUniqueFilter)}
                                onChange={setTierFilter}
                            />
                        </Show>
                    </div>
                    <Show when={[...patrons(), ...youtubeMembers()].length > 0}>
                        <div class="m-8"></div>
                        <div class="inline-flex flex-wrap">
                            <button class="btn btn-primary" onClick={recordScreen}>Record screen</button>
                        </div>
                    </Show>
                </div>

                <div class="divider"></div>
            </Show>

            <div id="supporter-display" class="mx-auto mt-8 p-4 text-center" style={{
                '--num-col': numPerRow() + 1,
                '--content-text-align': textAlign(),
                '--tier-display': showTiers() ? 'unset' : 'none',
                '--tier-background': bgColour(),
                '--tier-frontground': fontColour(),
                cursor: isRecording() ? 'none' : 'unset',
            }}>
                <Show when={isRecording() == false}>
                    <h3 class="text-2xl mb-4">Output</h3>
                </Show>

                <Show when={[...patrons(), ...youtubeMembers()].length === 0}>
                    <p>No supporters loaded</p>
                </Show>

                <Show when={patrons().filter(p => tierFilter().includes(p.tier)).length > 0}>
                    <p class="my-2 text-xl">Patreon Supporters</p>
                    <div class="inline-flex flex-wrap w-full">
                        <For each={patrons().filter(p => tierFilter().includes(p.tier))}>
                            {(supporter) => (
                                <GenericSupporterTile
                                    supporter={supporter}
                                />
                            )}
                        </For>
                    </div>
                </Show>

                <Show when={youtubeMembers().filter(p => tierFilter().includes(p.tier)).length > 0}>
                    <p class="my-2 text-xl">Youtube Members</p>
                    <div class="inline-flex flex-wrap w-full justify-center">
                        <For each={youtubeMembers().filter(p => tierFilter().includes(p.tier))}>
                            {(supporter) => (
                                <GenericSupporterTile
                                    supporter={supporter}
                                />
                            )}
                        </For>
                    </div>
                </Show>
            </div>

            <Show when={[...patrons(), ...youtubeMembers()].length > 0}>
                <div id="bottom" class="divider mt-80"></div>
            </Show>

        </CommonLayout>
    );
}

export default SupporterPage;
