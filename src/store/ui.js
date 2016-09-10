import { createReducer } from 'redux-act';
import { actions } from './user-actions';
import { reducer as formReducer } from 'redux-form';
import { assocPath } from 'ramda';

const reducers = {
  form: formReducer,
  toolbarOpen: createReducer({
    [actions.userToggleToolBar]: (state) => !state
  }, false),
  dashboardDialogOpen: createReducer({
    [actions.userToggleDashboardDetails]: (state) => !state
  }, false),
  selectedDashboard: createReducer({
    [actions.userSelectedDashboard]: (state, { dashboard }) => dashboard
  }, null),
  dashboardList: createReducer({
    [actions.userSaveDashboard]: (state, { name, ...other }) =>
      assocPath([name], { name, ...other }, state)
  }, {}),
  widgetList: createReducer({
    [actions.userSaveWidget]: (state, { dashboard, name, ...other }) =>
      assocPath([dashboard, name], { name, ...other }, state)
  }, [])
};

export default { actions, reducers };


