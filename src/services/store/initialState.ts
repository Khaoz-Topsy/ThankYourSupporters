import { ISidebarState } from "./sections/sidebarState";
import { IUserState } from "./sections/userState";

export interface IState {
    user: IUserState;
    sidebar: ISidebarState;
}

export const initialState: IState = {
    user: {
        name: 'Bob',
        char: 0,
        scale: 100,
    },
    sidebar: {
        isOpen: false,
    },
}
