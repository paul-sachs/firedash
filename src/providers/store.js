import { createReducer } from 'redux-act';
import { actions } from './actions';

const reducers = {
  dashboards: createReducer({
    [actions.addDashboard]: (state, payload) => state.concat(payload)
  }, [])
};

export default { actions, reducers };
