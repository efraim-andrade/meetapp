import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import '~/config/Reactotron';
import Global from '~/theme/global';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Global />

      <Routes />

      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
