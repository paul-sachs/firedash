import React, { PropTypes }  from 'react';
import connectBasedOnPropTypes from 'src/common/connect-based-on-proptypes';
import { compose, setPropTypes, setDisplayName, withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const enhance = compose(
  connectBasedOnPropTypes,
  setDisplayName('Dashboard'),
  setPropTypes({
    dashboardDialogOpen: PropTypes.bool.isRequired,
    userToggleDashboardDetails: PropTypes.func.isRequired
  }),
  withProps(({ userToggleDashboardDetails }) => ({
    actions: [
      <FlatButton key='cancel'
        label="Cancel"
        primary={true}
        onTouchTap={userToggleDashboardDetails}
      />,
      <RaisedButton key='save'
        style={{ width: '1px' }}
        form='dashboard-form'
        type="submit"
        label="Save"
        disabled={false}
      />
    ]
  }))
);

export default enhance(({ dashboardDialogOpen, actions }) =>
  <Dialog title='Dashboard'
    open={dashboardDialogOpen}
    actions={actions}
    modal={false}>
    <form id='dashboard-form'>
    </form>
  </Dialog>
);