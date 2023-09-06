import { Component, For, Show } from "solid-js";
import { capitalizeFirstLetter } from "../../helper/stringHelper";

interface IProps {
    title: string;
    values: Array<string>;
    options: Array<string>;
    onChange: (newValues: Array<string>) => void;
}

export const MultipleChoiceDropdown: Component<IProps> = (props: IProps) => {

    const onSelectOption = (opt: string) => {
        const exists = props.values.includes(opt);
        if (exists) {
            props.onChange(props.values.filter(v => v !== opt));
        }
        else {
            props.onChange([...props.values, opt]);
        }
    }

    const displayValue = (localValue: Array<string>, localOpts: Array<string>): string => {
        if (localValue.length === 0) {
            return 'NONE';
        }
        if (localValue.length === 1) {
            return localValue[0];
        }
        if (localValue.length === localOpts.length) {
            return 'ALL';
        }

        return `${localValue.length} items`;
    }

    return (
        <div class="dropdown">
            <label tabIndex={0} class="btn m-1">{props.title}: {displayValue(props.values, props.options)}</label>
            <ul tabIndex={0} class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <For each={props.options}>
                    {(opt) => (
                        <li class="cursor-pointer" onClick={() => onSelectOption(opt)}>
                            <a>
                                <Show when={props.values.includes(opt)}>
                                    <span>✔️</span>
                                </Show>
                                {capitalizeFirstLetter(opt)}
                            </a>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
}
