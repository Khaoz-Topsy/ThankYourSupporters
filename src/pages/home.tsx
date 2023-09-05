import type { Component } from 'solid-js';
import { CommonLayout } from '../components/common/layout';
import { PageHeader } from '../components/common/pageHeader';
import { useNavigate } from '@solidjs/router';
import { routes } from '../constants/route';
import { CenterLoading } from '../components/core/loading';

export const HomePage: Component = () => {
    return (
        <CommonLayout>
            <PageHeader text="Home"></PageHeader>
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