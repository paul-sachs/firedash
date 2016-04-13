import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from './reducers';
import { actions, actionTypes } from './actions';

const middleware = routerMiddleware(browserHistory);

const enhancer = next => (reducer, initialState, enhancer) => {
  const store = next(reducer, initialState, enhancer);

  const syncedHistory = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router.routing
  });

  store.dispatch({
    type: 'SYSTEM_SET_HISTORY',
    payload: syncedHistory
  });

  return store;
};

export default { ...actionTypes, actions, reducers, middleware, enhancer };
