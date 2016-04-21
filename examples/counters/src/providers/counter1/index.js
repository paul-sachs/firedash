import reducers from './reducers';
import { actions, actionTypes } from './actions';
import localforage from 'redux-replicate-localforage';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

// Replication options can allow easy optimistic updates and state
// persistance. This example uses localstorage to save changes.

const middleware = createSagaMiddleware(sagas);
const replication = {
  replicator: localforage
};

export default { ...actionTypes, actions, reducers, replication, middleware };
