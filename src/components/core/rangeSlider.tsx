import { Component, For } from "solid-js";

interface IProps {
    id?: string;
    options: Array<string>;
    initialPosition?: number;
    onChange: (newPosition: number) => void;
}

export const RangeSlider: Component<IProps> = (props: IProps) => {

    return (
        <>
            <input
                id={props.id}
                type="range"
                min={0}
                max={props.options.length - 1}
                value={props.initialPosition ?? 0}
                class="range range-info"
                step="1"
                onInput={data => {
                    const newValue = data?.target?.value ?? '0';
                    try {
                        props.onChange(parseInt(newValue));
                    } catch (e: any) { }
                }}
            />
            <div class="w-full flex justify-between text-xs px-2">
                <For each={props.options}>
                    {(opt) => (
                        <span>{opt}</span>
                    )}
                </For>
            </div>
        </>
    );
}