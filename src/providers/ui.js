import { createAction, createReducer } from 'redux-act';

const setToolbarOpen = createAction('set toolbar open/closed');

const actions = {
  setToolbarOpen
};

const reducers = {
  toolbarOpen: createReducer({
    [setToolbarOpen]: (_, payload) => payload
  }, false)
};

export default { actions, reducers };
