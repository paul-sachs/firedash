import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fork } from 'redux-saga/effects';

export function* processLocationChange(action) {
  console.log(action.payload.pathname);
  console.log('%%%%%%%%%%%');
}

function* watchNavigationEvent() {
  console.log(LOCATION_CHANGE);
  yield* takeLatest(LOCATION_CHANGE, processLocationChange);
}


export default function* root() {
  yield [
    // fork(watchUserSelectedConversation)
    fork(watchNavigationEvent)
  ];
}
