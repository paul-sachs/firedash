import React, { PropTypes } from 'react';
import provide from 'react-redux-provide';

const counter = ({ counter1, userIncrementCounter1, userDecrementCounter1 }) => {
  return <div>
    {counter1}
    <button onClick={userIncrementCounter1}>Increment</button>
    <button onClick={userDecrementCounter1}>Decrement</button>
  </div>;
};

counter.propTypes = {
  counter1: PropTypes.number,
  routing: PropTypes.any,
  userIncrementCounter1: PropTypes.func,
  userDecrementCounter1: PropTypes.func
};

export default provide(counter);
