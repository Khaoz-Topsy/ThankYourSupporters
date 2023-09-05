import { Route, Routes } from "@solidjs/router";
import { Component, createSignal, lazy, onMount, Show, Suspense } from 'solid-js';
import { routes } from "./constants/route";
import { NotFoundPage } from "./pages/notFound";
import { HomePage, RedirectToHome } from "./pages/home";

const SupporterPage = lazy(() => import("./pages/supporter"));

export const AppShell: Component = () => {
  return (
    <Routes>
      <Route path={routes.supporter} component={SupporterPage} />

      <Route path={routes.actualHome} component={HomePage} />
      <Route path={routes.home} component={RedirectToHome} />
      <Route path={"*"} element={<NotFoundPage />} />
    </Routes>
  );
};

