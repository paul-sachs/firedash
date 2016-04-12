import test from 'tape-catch';

import { refreshCards, fetchData } from './sagas';
import { actions } from './actions';

import { call, put } from 'redux-saga/effects';

test('refreshCards saga test', t => {
  const generator = refreshCards(actions.userRefreshMap());

  t.deepEqual(
    generator.next().value,
    call(fetchData),
    'generator should call _getCards on refreshCards action'
  );

  t.deepEqual(
    generator.next('test').value,
    put(actions.setMap('test')),
    'should put an action with the result'
  );

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'refreshCards Saga must be done'
  );

  t.end();
});
