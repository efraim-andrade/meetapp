import { combineReducers } from 'redux';

import auth from './auth/reducer';
import meetup from './meetup/reducer';

export default combineReducers({
  auth,
  meetup,
});
