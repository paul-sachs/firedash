import createSagaMiddleware from 'redux-saga';

import map from './map';
import { actions, actionTypes } from './actions';
import sagas from './sagas';
import { applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const enhancer = [
  next => (reducer, initialState, enhancer) => {
    const store = next(reducer, initialState, enhancer);

    sagaMiddleware.run(sagas);

    return store;
  },
  applyMiddleware(sagaMiddleware)
];


export default { ...map, ...actionTypes, actions, enhancer };
