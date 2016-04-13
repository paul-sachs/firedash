import { actionTypes } from './actions';

export default {
  counter1: (state = 0, action) => {
    switch (action.type) {
      case actionTypes.USER_INCREMENT_COUNTER1:
        return state + 1;
      case actionTypes.USER_DECREMENT_COUNTER1:
        return state - 1;
      default:
        return state;
    }
  }
};
