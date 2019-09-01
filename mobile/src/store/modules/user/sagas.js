import { all, takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateUser({ payload }) {
  try {
    const { name, email, ...rest } = payload;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Informações atualizadas com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Algo deu errado, tente novamente!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateUser)]);
