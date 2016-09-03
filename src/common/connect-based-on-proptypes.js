import { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';

export default (BaseComponent) => {
  return connect((state, props) => {
    return {
      ..._.transform(BaseComponent.propTypes, (result, value, key) => {
        const stateAtKey = state[key];
        if (typeof stateAtKey !== 'undefined')
          result[key] = stateAtKey;
      }, {}),
      ...props,
      __actions: _.transform(BaseComponent.propTypes, (result, value, key) => {
        const stateAtKey = state.__actions[key];
        if (typeof stateAtKey !== 'undefined' && value === PropTypes.func.isRequired) {
          result[key] = stateAtKey;
        }
      }, {})
    };
  }, null,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ..._.pickBy(stateProps, (_, key) => key !== '__actions'),
      ...bindActionCreators(stateProps.__actions, dispatchProps.dispatch),
      ...ownProps
    };
  })(BaseComponent);
};