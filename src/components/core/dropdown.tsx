import { Component, For } from "solid-js";
import { capitalizeFirstLetter } from "../../helper/stringHelper";

interface IProps {
    title: string;
    value: string;
    options: Array<string>;
    onChange: (newPosition: string) => void;
}

export const Dropdown: Component<IProps> = (props: IProps) => {

    return (
        <div class="dropdown">
            <label tabIndex={0} class="btn m-1">{props.title}: {props.value}</label>
            <ul tabIndex={0} class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <For each={props.options}>
                    {(opt) => (
                        <li class="cursor-pointer" onClick={() => props.onChange(opt)}>
                            <a>{capitalizeFirstLetter(opt)}</a>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
}
