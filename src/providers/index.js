import { createStore, combineReducers } from 'redux';

import ui from './ui';
import { actions as userActions } from './user-actions';

const actionReducer = {
  __actions: () => ({
    ...userActions
  })
};

export default (data) => {
  const reducer = combineReducers({ ...ui.reducers, ...actionReducer });

  return createStore(reducer, data, window.devToolsExtension && window.devToolsExtension());
} ;