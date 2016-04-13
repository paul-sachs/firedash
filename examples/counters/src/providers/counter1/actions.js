export const actionTypes = {
  USER_INCREMENT_COUNTER1: 'USER_INCREMENT_COUNTER1',
  USER_DECREMENT_COUNTER1: 'USER_DECREMENT_COUNTER1'
};

export const actions = {
  userIncrementCounter1: () => ({ type: actionTypes.USER_INCREMENT_COUNTER1 }),
  userDecrementCounter1: () => ({ type: actionTypes.USER_DECREMENT_COUNTER1 })
};
