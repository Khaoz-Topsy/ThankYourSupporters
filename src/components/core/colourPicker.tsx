import { Component, For } from "solid-js";

interface IProps {
    title: string;
    value: string;
    onChange: (newPosition: string) => void;
}

export const ColourPicker: Component<IProps> = (props: IProps) => {

    return (
        <div class="form-control m-2">
            <label class="label cursor-pointer">
                <input type="color" value={props.value} class="input h-6 w-6 p-0 border-0 rounded" onChange={(value) => props.onChange(value?.target?.value ?? '')} />
                <span class="label-text ml-3">{props.title}</span>
            </label>
        </div>
    );
}
