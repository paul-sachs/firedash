import createSagaMiddleware from 'redux-saga';

import thinkyList from './thinky-list';
import { actions, actionTypes } from './actions';
import sagas from './sagas';

const middleware = createSagaMiddleware(sagas);

export default { ...thinkyList, ...actionTypes, actions, middleware };

