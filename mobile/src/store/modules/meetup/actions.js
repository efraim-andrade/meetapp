export function meetupsRequest() {
  return {
    type: '@meetup/MEETUPS_REQUEST',
  };
}

export function meetupsSuccess(meetup) {
  return {
    type: '@meetup/MEETUPS_SUCCESS',
    payload: meetup,
  };
}

export function meetupsFailure() {
  return {
    type: '@meetup/MEETUPS_FAILURE',
  };
}
