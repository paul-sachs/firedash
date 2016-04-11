import { takeLatest } from 'redux-saga';
import { isCancelError } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { get } from 'axios';

import { prepareForMap, mapResponse } from './helpers';

import { actions, actionTypes } from './actions';

// This might be better as a separate utility function
export function fetchCards() {
  return get(
    process.env.SERVICE_URL,
    { withCredentials: true,  headers: {'X_ORG_ID': window.org_id } }
  )
  .then(({ data }) => data.data.map(mapResponse).map(prepareForMap));
}

export function* refreshCards() {
  try {
    const data = yield call(fetchCards);
    yield put(actions.setThinkyList(data));
  } catch (e) {
    if (!isCancelError(e)) {
      throw e;
    }
  }
}

function* watchRefreshCards() {
  yield* takeLatest(actionTypes.USER_REFRESH_THINKYLIST, refreshCards);
}

function* startup() {
  yield put(actions.userRefreshThinkyList());
}

export default function* root() {
  yield [
    fork(startup),
    fork(watchRefreshCards)
  ];
}
