import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from '~/theme/global';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Global />

      <Routes />
    </BrowserRouter>
  );
}
