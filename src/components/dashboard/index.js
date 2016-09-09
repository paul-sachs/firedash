import React from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import fromState from 'src/common/from-state';
import fromUserActions from 'src/common/from-user-actions';
import {
  TextField
} from 'redux-form-material-ui';

const enhance = compose(
  fromState({ dashboardDialogOpen: 'dashboardDialogOpen' }),
  fromUserActions({
    userToggleDashboardDetails: 'userToggleDashboardDetails'
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
  }))
);

const Form = reduxForm({
  form: 'DashboardForm',  // a unique identifier for this form
  validate
})(({ handleSubmit }) =>
  <form id='dashboard-form' onSubmit={handleSubmit}>
    <Field name='name' label='Name'
      component={TextField}
      props={{ hintText: 'Name', floatingLabelText: 'Name' }}/>
  </form>
);

const handleSubmit = (data, dispatch, formProps) => {
  console.log(formProps);
  return data;
};

export default enhance(({ dashboardDialogOpen, actions }) =>
  <Dialog title='Dashboard'
    open={dashboardDialogOpen}
    actions={actions}
    modal={false}>
    <Form onSubmit={handleSubmit}/>
  </Dialog>
);
