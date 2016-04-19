import reducers from './reducers';
import { actions, actionTypes } from './actions';
import localforage from 'redux-replicate-localforage';

// Replication options can allow easy optimistic updates and state
// persistance. This example uses localstorage to save changes.

const replication = {
  replicator: localforage
};

export default { ...actionTypes, actions, reducers, replication };
