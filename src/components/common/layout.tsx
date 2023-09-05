import { Component, JSX, Suspense } from "solid-js";
import { getSidebarIsOpen } from "../../services/store/sections/sidebarState";
import { getStateService } from "../../services/store/stateService";
import { HamburgerIcon } from "../core/icon/hamburger";
import { CenterLoading } from "../core/loading";
import { Sidebar } from "./sidebar";

interface IProps {
    children: JSX.Element;
}

export const CommonLayout: Component<IProps> = (props: IProps) => {
    const stateRef = getStateService();
    const [_, setIsOpen] = getSidebarIsOpen(stateRef);

    return (
        <>
            <div class="absolute top-4 left-4 cursor-pointer" onClick={() => setIsOpen(true)}>
                <HamburgerIcon />
            </div>
            <Sidebar />
            <div class="main w-full h-min-screen">
                <Suspense fallback={<CenterLoading />}>
                    {props.children}
                </Suspense>
            </div>
        </>
    );
}