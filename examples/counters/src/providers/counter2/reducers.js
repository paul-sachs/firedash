import { actionTypes } from './actions';

export default {
  counter2: (state = 0, action) => {
    switch (action.type) {
      case actionTypes.USER_INCREMENT_COUNTER2:
        return state + 1;
      case actionTypes.USER_DECREMENT_COUNTER2:
        return state - 1;
      default:
        return state;
    }
  }
};
