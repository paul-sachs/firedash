import { createAction } from 'redux-act';

export const actions = {
  userToggleToolBar: createAction('user toggles toolbar'),
  userToggleDashboardDetails: createAction('user toggle dashboard details'),
  userSaveDashboard: createAction('user save dashboard')
};