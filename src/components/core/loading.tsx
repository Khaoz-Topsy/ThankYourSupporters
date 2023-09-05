import { Component } from "solid-js";

export const CenterLoading: Component = () => {
    return (
        <div class="flex justify-center">
            <LoadingSpinner />
        </div>
    );
}

export const LoadingSpinner: Component = () => {
    return (
        <span class="loading loading-spinner loading-lg"></span>
    );
}

export const SmolLoadingSpinner: Component = () => {
    return (
        <span class="loading loading-spinner loading-md"></span>
    );
}