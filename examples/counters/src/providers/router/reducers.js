import { routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { combineReducers } from 'redux';

const history = (state = browserHistory, action) => {
  switch (action.type) {
    case 'SYSTEM_SET_HISTORY':
      return action.payload;
    default:
      return state;
  }
};

export default {
  router: combineReducers({
    history,
    routing: routerReducer
  })
};
