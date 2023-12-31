/* @refresh reload */
import 'reflect-metadata';
import { render } from 'solid-js/web';
import { Router, hashIntegration } from '@solidjs/router';

import { AppShell } from './appShell';

import './main.scss';

const root = document.getElementById('supporter-app');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router source={hashIntegration()}>
    <AppShell />
  </Router>
), root!);
