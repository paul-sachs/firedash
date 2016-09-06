import { connect } from 'react-redux';
import { mapValues } from 'lodash';

export default requestedProperties => connect(state =>
  mapValues(requestedProperties, key => state[key])
);