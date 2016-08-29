import { createReducer } from 'redux-act';
import { actions } from './user-actions';

const reducers = {
  toolbarOpen: createReducer({
    [actions.userToggleToolBar]: (state) => !state
  }, false),
  dashboardDialogOpen: createReducer({
    [actions.userToggleDashboardDetails]: (state) => !state
  }, false)
};

export default { actions, reducers };
