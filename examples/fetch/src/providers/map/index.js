import createSagaMiddleware from 'redux-saga';

import map from './map';
import { actions, actionTypes } from './actions';
import sagas from './sagas';

const middleware = createSagaMiddleware(sagas);

export default { ...map, ...actionTypes, actions, middleware };

