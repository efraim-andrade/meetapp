import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import subscriptions from './subscriptions/sagas';

export default function* rootSaga() {
  return yield all([auth, subscriptions, user]);
}
