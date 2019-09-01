import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import {
  subscriptionsSuccess,
  subscriptionsFailure,
} from '~/store/modules/subscriptions/actions';

export function* fetchSubscriptions() {
  try {
    const response = yield call(api, 'subscriptions');

    const meetupsData = response.data.map(item => ({
      ...item.meetup,
      banner: item.meetup.banner.url,
      provider: item.meetup.user.name,
    }));

    yield put(subscriptionsSuccess(meetupsData));
  } catch (error) {
    yield put(subscriptionsFailure());
    Alert.alert('Ocorreu um problema ao buscar seus meetups, tente novamente!');
  }
}

export default all([
  takeLatest('@meetup/SUBSCRIPTIONS_REQUEST', fetchSubscriptions),
]);
