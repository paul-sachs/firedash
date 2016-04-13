import React, { PropTypes } from 'react';
import provide from 'react-redux-provide';

const counter = ({ counter2, userIncrementCounter2, userDecrementCounter2 }) => {
  return <div>
    {counter2}
    <button onClick={userIncrementCounter2}>Increment</button>
    <button onClick={userDecrementCounter2}>Decrement</button>
  </div>;
};

counter.propTypes = {
  counter2: PropTypes.number.isRequired,
  userIncrementCounter2: PropTypes.func,
  userDecrementCounter2: PropTypes.func
};

export default provide(counter);
