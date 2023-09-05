
import { Component } from 'solid-js';
import { PageHeader } from '../components/common/pageHeader';
import { CommonLayout } from '../components/common/layout';

export const NotFoundPage: Component = () => {

    return (
        <CommonLayout>
            <PageHeader text="Not Found"></PageHeader>
            <div class="m-16"></div>

            <div class="flex justify-center">Page not found</div>
        </CommonLayout>
    );
};
