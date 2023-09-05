import { Component, JSX } from "solid-js";

interface IProps {
    text: string
    class?: string
}

export const PageHeader: Component<IProps> = (props: IProps) => {
    return (
        <div class={`page-title noselect ${props.class} text-center flex-row justify-center pt-8 mb-4`}>
            <h1 class="text-3xl">{props.text}</h1>
        </div>
    );
}