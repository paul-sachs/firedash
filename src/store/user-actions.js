import { createAction } from 'redux-act';

const userToggleToolBar = createAction('user toggles toolbar');
const userToggleDashboardDetails = createAction('user toggle dashboard details');

export const actions = {
  userToggleToolBar,
  userToggleDashboardDetails
};