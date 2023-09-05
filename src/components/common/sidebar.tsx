import { Component, JSX } from 'solid-js';

import { Link } from '@solidjs/router';
import { externalUrl } from '../../constants/external';
import { routes } from '../../constants/route';
import { getSidebarIsOpen } from '../../services/store/sections/sidebarState';
import { getStateService } from '../../services/store/stateService';
import { BasicLink } from '../core/link';

interface ISidebarProps {
    children?: JSX.Element;
}

export const Sidebar: Component<ISidebarProps> = (props: ISidebarProps) => {
    const stateRef = getStateService();
    const [isOpen, setIsOpen] = getSidebarIsOpen(stateRef);

    return (
        <div class="drawer pointer-events-none">
            <input id="app-drawer" type="checkbox" class="drawer-toggle" checked={isOpen()} />
            <div class="drawer-content">
                {props.children}
            </div>
            <div class="drawer-side">
                <label class="drawer-overlay" onClick={() => setIsOpen(!isOpen())}></label>
                <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><Link activeClass="im-active" href={routes.actualHome} onClick={() => setIsOpen(false)}>🏠 Home</Link></li>
                    <li><Link href={routes.supporter} onClick={() => setIsOpen(false)}>👑 Supporter list</Link></li>
                    <div class="divider"></div>
                    <li><BasicLink href={externalUrl.assistantapps}>🔗 AssistantApps Homepage</BasicLink></li>
                    <li><BasicLink href={externalUrl.assistantappsDiscord}>🔗 Discord</BasicLink></li>
                    <li><BasicLink href={externalUrl.assistantappsMastodon}>🔗 Mastodon</BasicLink></li>
                    <li><BasicLink href={externalUrl.githubRepo}>🔗 Github Repository</BasicLink></li>
                </ul>
            </div>
        </div>
    );
}