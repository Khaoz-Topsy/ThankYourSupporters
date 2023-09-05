import { Component, For } from "solid-js";

interface IProps {
    title: string;
    value: boolean;
    onChange: (newPosition: boolean) => void;
}

export const Checkbox: Component<IProps> = (props: IProps) => {

    return (
        <div class="form-control m-2">
            <label class="label cursor-pointer">
                <input type="checkbox" checked={props.value} class="checkbox" onChange={(value) => props.onChange(value?.target?.checked ?? false)} />
                <span class="label-text ml-3">{props.title}</span>
            </label>
        </div>
    );
}
