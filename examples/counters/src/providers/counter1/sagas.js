import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fork } from 'redux-saga/effects';

export function* processLocationChange(action) {
  console.log(action);
  console.log('%%%%%%%%%%%');
}

function* watchNavigationEvent() {
  yield* takeLatest(LOCATION_CHANGE, processLocationChange);
}


export default function* root() {
  yield [
    // fork(watchUserSelectedConversation)
    fork(watchNavigationEvent)
  ];
}
