import React from 'react';
import { HashRouter } from 'react-router-dom';
import { supported } from 'browser-fs-access';

import Router from './router/Router';

import routes from './routes';

if (supported) {
  console.log('[xi] Using the File System Access API.');
} else {
  console.log('[xi] Using the fallback implementation.');
}

export default function App() {
  return (
    <HashRouter>
      <Router routes={routes} />
    </HashRouter>
  );
}
