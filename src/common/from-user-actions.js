import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'ramda';
import { actions } from 'src/store/user-actions';

export default requestedProperties =>
  connect(null, dispatch => bindActionCreators(
    map(key => actions[key], requestedProperties),
    dispatch)
  );