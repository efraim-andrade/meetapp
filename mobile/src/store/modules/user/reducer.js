import produce from 'immer';

const INITIAL_STATE = {
  error: false,
  loading: false,
  profile: {},
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_SUCCESS':
        draft.profile = action.payload.user;
        break;

      case '@user/UPDATE_PROFILE_REQUEST':
        draft.loading = true;
        draft.error = false;
        break;

      case '@user/UPDATE_PROFILE_SUCCESS':
        draft.loading = false;
        draft.error = false;
        draft.profile = action.payload.profile;
        break;

      case '@user/UPDATE_PROFILE_FAILURE':
        draft.loading = false;
        draft.error = true;
        break;

      default:
        break;
    }
  });
}
