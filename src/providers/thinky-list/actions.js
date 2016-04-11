import thinkyList from './thinky-list';

export const actionTypes = {
  USER_REFRESH_THINKYLIST: 'USER_REFRESH_THINKYLIST'
};

export const actions = {
  ...thinkyList.actions,
  userRefreshThinkyList() {
    return { type: actionTypes.USER_REFRESH_THINKYLIST };
  }
};
