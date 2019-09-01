import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      return toast.error('Usuário não é um organizador');
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    return history.push('/dashboard');
  } catch (error) {
    toast.error('Algo deu errado tente novamente.');
    yield put(signInFailure());
  }
}

export function signOut() {
  localStorage.clear();

  history.push('/');
}

export function* signUp({ payload }) {
  try {
    const params = {
      ...payload,
      provider: true,
    };

    yield call(api.post, 'users', params);

    toast.success(
      'Sua conta foi criada com sucesso! Por favor efetue o login.'
    );

    history.push('/');
  } catch (error) {
    console.log(error);
    toast.error('Algo deu errado tente novamente.');
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
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
