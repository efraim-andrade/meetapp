import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/Reactotron';
import Global from '~/theme/global';
import history from '~/services/history';
import { store, persistor } from '~/store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Global />

          <Routes />

          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
