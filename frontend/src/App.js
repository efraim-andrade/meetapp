import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import '~/config/Reactotron';
import { store } from '~/store';
import Global from '~/theme/global';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Global />

        <Routes />

        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}
