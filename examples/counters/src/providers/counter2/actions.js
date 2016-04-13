export const actionTypes = {
  USER_INCREMENT_COUNTER2: 'USER_INCREMENT_COUNTER2',
  USER_DECREMENT_COUNTER2: 'USER_DECREMENT_COUNTER2'
};

export const actions = {
  userIncrementCounter2: () => ({ type: actionTypes.USER_INCREMENT_COUNTER2 }),
  userDecrementCounter2: () => ({ type: actionTypes.USER_DECREMENT_COUNTER2 })
};
