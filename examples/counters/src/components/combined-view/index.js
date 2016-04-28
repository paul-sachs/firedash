import React from 'react';

const CombinedView = ({ counter1 = 0, counter2 = 0 }) => (
  <div>Total: {counter1 + counter2}</div>
);

CombinedView.propTypes = {
  counter1: React.PropTypes.number,
  counter2: React.PropTypes.number
};

export default CombinedView;
