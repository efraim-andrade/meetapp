import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { NavigationAction } from 'react-navigation';

import api from '~/services/api';

import { signInSuccess, signInFailure, signInRequest } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (error) {
    Alert.alert('Algo deu errado tente novamente.');
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    yield call(api.post, 'users', payload);

    Alert.alert('Sua conta foi criada com sucesso!');

    yield put(signInRequest(email, password));
  } catch (error) {
    console.log(error);
    Alert.alert('Algo deu errado tente novamente.');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
