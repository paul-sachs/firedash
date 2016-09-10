import { connect } from 'react-redux';
import { map } from 'ramda';

export default requestedProperties => connect(state =>
  map(key => state[key], requestedProperties)
);