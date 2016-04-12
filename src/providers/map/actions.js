import map from './map';

export const actionTypes = {
  USER_REFRESH_MAP: 'USER_REFRESH_MAP'
};

export const actions = {
  ...map.actions,
  userRefreshMap() {
    return { type: actionTypes.USER_REFRESH_MAP };
  }
};
