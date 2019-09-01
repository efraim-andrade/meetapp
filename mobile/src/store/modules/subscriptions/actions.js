export function subscriptionsRequest() {
  return {
    type: '@meetup/SUBSCRIPTIONS_REQUEST',
  };
}

export function subscriptionsSuccess(meetup) {
  return {
    type: '@meetup/SUBSCRIPTIONS_SUCCESS',
    payload: meetup,
  };
}

export function subscriptionsFailure() {
  return {
    type: '@meetup/SUBSCRIPTIONS_FAILURE',
  };
}
