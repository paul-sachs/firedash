import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapValues } from 'lodash';
import { actions } from 'src/store/user-actions';

export default requestedProperties =>
  connect(null, dispatch => bindActionCreators(
    mapValues(requestedProperties, key => actions[key]),
    dispatch)
  );