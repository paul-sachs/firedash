import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

export default reduxForm({
  form: 'DashboardForm',  // a unique identifier for this form
  validate
})(({ handleSubmit }) =>
  <form id='dashboard-form' onSubmit={handleSubmit}>
    <Field name='name' label='Name'
      component={TextField}
      props={{ hintText: 'Name', floatingLabelText: 'Name' }}/>
  </form>
);

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};