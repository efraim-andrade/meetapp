import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/SUBSCRIPTIONS_REQUEST': {
        draft.loading = true;
        draft.error = false;
        break;
      }

      case '@meetup/SUBSCRIPTIONS_SUCCESS': {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }

      case '@meetup/SUBSCRIPTIONS_FAILURE': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
        return state;
    }
  });
}
