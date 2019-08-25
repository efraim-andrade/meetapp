import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { meetupsSuccess, meetupsFailure } from '~/store/modules/meetup/actions';

export function* fetchMeetups() {
  try {
    const { data } = yield call(api, 'meetups/provider');

    yield put(meetupsSuccess(data));
  } catch (error) {
    yield put(meetupsFailure());
    toast.error('Ocorreu um problema ao buscar seus meetups, tente novamente!');
  }
}

export default all([takeLatest('@meetup/MEETUPS_REQUEST', fetchMeetups)]);
