import reducers from './reducers';
import { actions, actionTypes } from './actions';
import localforage from 'redux-replicate-localforage';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const middleware = createSagaMiddleware();

const replication = {
  replicator: localforage,
  reducerKeys: ['counter1']
};

const enhancer = next => (reducer, initialState, enhancer) => {
  const store = next(reducer, initialState, enhancer);

  middleware.run(sagas);

  return store;
};

export default { ...actionTypes, actions, reducers, replication, middleware, enhancer };
