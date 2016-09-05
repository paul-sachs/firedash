import test from 'tape-catch';
import { call, select, put } from 'redux-saga/effects';
import Quest from 'src/common/quest';

const a = (args) => args.concat('yo');

function* gen() {
  const value = yield call(a,'stuff1', 'stuff2');
  const count = yield select(({ count }) => count);
  yield call(a, ...value.concat(count));
  yield put({ actionType: 'Boop' });
}

test('marks conversation as read', t => {
  const quest = new Quest();

  quest.setState({ count: 0 });

  quest
    .expectTo
    .call(a, 'stuff1', 'stuff2')
    .willReturn(['stuff1', 'stuff2', 'yo'])
    .then(() => t.pass('a called'));

  quest
    .expectTo
    .call(a, 'stuff1', 'stuff2', 'yo', 0)
    .willReturn(['stuff1', 'stuff2', 'yo', 0, 'yo'])
    .then(() => t.pass('a called again'));

  quest
    .expectTo
    .put({ actionType: 'Boop' })
    .then(() => t.pass('Boop action fired'));

  try {
    quest.begin(gen());
  } catch (e) {
    t.fail(e);
  }

  t.end();
});




/*
What i want!

// Generate state will be based on factory girl like operations:
// You declaraitively say the structures that are present in your
// state
const state = generateState();

expect(func).toReturn(...)
*/