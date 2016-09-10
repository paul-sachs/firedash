import React from 'react';
import { compose, setDisplayName, withProps, withHandlers } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import fromState from 'src/common/from-state';
import fromUserActions from 'src/common/from-user-actions';
import Form from './form';

const enhance = compose(
  fromState({ dashboardDialogOpen: 'dashboardDialogOpen' }),
  fromUserActions({
    userToggleDashboardDetails: 'userToggleDashboardDetails',
    userSaveDashboard: 'userSaveDashboard'
  }),
  setDisplayName('Dashboard'),
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
  })),
  withHandlers({
    handleSubmit: (props) => (data) => {
      props.userToggleDashboardDetails();
      props.userSaveDashboard(data);
    }
  })
);

export default enhance(({ dashboardDialogOpen, actions, handleSubmit }) =>
  <Dialog title='Dashboard'
    open={dashboardDialogOpen}
    actions={actions}
    modal={false}>
    <Form onSubmit={handleSubmit}/>
  </Dialog>
);
