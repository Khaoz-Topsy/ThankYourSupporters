import { createSignal, type Component, For, Show } from 'solid-js';
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

export const SupporterPage: Component = () => {
    const [numPerRow, setNumPerRow] = createSignal<number>(5);
    const [showTiers, setShowTiers] = createSignal<boolean>(true);
    const [bgColour, setBgColour] = createSignal<string>('#00000080');
    const [fontColour, setFontColour] = createSignal<string>('#f0f0f0');
    const [textAlign, setTextAlign] = createSignal<string>('left');

    const [patrons, setPatrons] = createSignal<Array<IGenericSupporter>>([]);
    const [youtubeMembers, setYoutubeMembers] = createSignal<Array<IGenericSupporter>>([]);

    const handlePatreon = async (event: any) => {
        const files = event?.target?.files ?? [];
        const file = files[0];
        const csvFileContent = await readCsvFileAsync<IPatreonExport>(file);
        const items = csvFileContent.filter(c => c.patronStatus === 'Active patron');
        const ordered = items.sort((a, b) => b.lifetimeAmount - a.lifetimeAmount);

        const combined = [];
        for (const item of ordered) {
            const mapped: IGenericSupporter = {
                title: item.name,
                tier: item.tier.length > 0 ? item.tier : '---',
            };
            combined.push(mapped);
        }
        setPatrons(combined);
    }

    const handleYoutubeMember = async (event: any) => {
        const files = event?.target?.files ?? [];
        const file = files[0];
        const csvFileContent = await readCsvFileAsync<IYoutubeMemberExport>(file);

        const combined = [];
        for (const item of csvFileContent) {
            const mapped: IGenericSupporter = {
                title: item.member,
                tier: item.currentlevel ?? '',
            };
            combined.push(mapped);
        }
        setYoutubeMembers(combined.sort((a, b) => a.tier.localeCompare(b.tier) || a.title.localeCompare(b.title)));
    }

    return (
        <CommonLayout>
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
                </div>
            </div>

            <div class="divider"></div>

            <div class="mx-auto mt-8 p-4 text-center" style={{
                '--num-col': numPerRow() + 1,
                '--content-text-align': textAlign(),
                '--tier-display': showTiers() ? 'unset' : 'none',
                '--tier-background': bgColour(),
                '--tier-frontground': fontColour(),
            }}>
                <h3 class="text-xl mb-4">Output</h3>

                <Show when={patrons().length > 0}>
                    <p class="my-2">Patreon Supporters</p>
                    <div class="inline-flex flex-wrap">
                        <For each={patrons()}>
                            {(supporter) => (
                                <GenericSupporterTile
                                    supporter={supporter}
                                />
                            )}
                        </For>
                    </div>
                </Show>

                <Show when={youtubeMembers().length > 0}>
                    <p class="my-2">Youtube Members</p>
                    <div class="inline-flex flex-wrap">
                        <For each={youtubeMembers()}>
                            {(supporter) => (
                                <GenericSupporterTile
                                    supporter={supporter}
                                />
                            )}
                        </For>
                    </div>
                </Show>
            </div>

            <Show when={patrons().length > 0 || youtubeMembers().length > 0}>
                <div class="divider mt-80"></div>
            </Show>

        </CommonLayout>
    );
}

export default SupporterPage;
