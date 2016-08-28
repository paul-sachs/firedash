// import createSagaMiddleware from 'redux-saga';

import ui from './ui';
// import store from './store';

// import sagas from './sagas';
//import actions from './actions';
import { actions as userActions } from './user-actions';
// const middleware = createSagaMiddleware();
// const onReady = () => middleware.run(sagas);


export default {
  root: {
    actions: {
      ...ui.actions,
      ...userActions
    },
    reducers: {
      ...ui.reducers
    }
  }
};