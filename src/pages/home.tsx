import type { Component } from 'solid-js';
import { CommonLayout } from '../components/common/layout';
import { PageHeader } from '../components/common/pageHeader';
import { Link, useNavigate } from '@solidjs/router';
import { routes } from '../constants/route';
import { CenterLoading } from '../components/core/loading';

export const HomePage: Component = () => {
    return (
        <CommonLayout>
            <PageHeader text="Home"></PageHeader>

            <div class="container mx-auto my-8 text-center noselect">
                <img src="./assets/img/underConstruction.webp" class="mx-auto" alt="under construction" draggable="false" />

                <p class="mt-4 text-xl max-w-lg mx-auto">This is a simple site to help you display your Patreon &amp; Youtube members in a simple way using the export functionality on their platforms.</p>

                <Link href={routes.supporter}>
                    <div class="btn btn-primary mt-8">Use it now</div>
                </Link>

            </div>
        </CommonLayout>
    );
}

export const RedirectToHome: Component = () => {
    const navigate = useNavigate();
    navigate(routes.actualHome);

    return (
        <CenterLoading />
    );
};