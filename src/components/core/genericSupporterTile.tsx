import { Component, Show } from "solid-js";
import { IGenericSupporter } from "../../contracts/genericSupporter";

interface IProps {
    supporter: IGenericSupporter;
}

export const GenericSupporterTile: Component<IProps> = (props: IProps) => {

    return (
        <div class="supporter-tile noselect p-1">
            <div class="card rounded-md shadow-xl">
                <div class="card-body justify-center py-1 px-3">
                    <Show when={props.supporter.profilePic != null}>
                        <img src={props.supporter.profilePic} alt={props.supporter.title} draggable="false" />
                    </Show>
                    <div class="supporter-content justify-center pl-1">
                        <h3 class="text-xl text-ellipsis truncate overflow-hidden">{props.supporter.title}</h3>
                        <Show when={props.supporter.tier.length > 0}>
                            <p class="supporter-tier pb-0 text-ellipsis truncate overflow-hidden">{props.supporter.tier}</p>
                        </Show>
                    </div>
                </div>
            </div>
        </div>
    );
}