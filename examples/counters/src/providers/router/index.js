import { routerMiddleware, syncHistoryWithStore, routerActions } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reducers from './reducers';

const middleware = routerMiddleware(browserHistory);

const enhancer = next => (reducer, initialState, enhancer) => {
  const store = next(reducer, initialState, enhancer);

  syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
  });

  return store;
};

export default { actions: routerActions, reducers, middleware, enhancer };
