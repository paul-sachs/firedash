import React, { PropTypes } from 'react';
import styles from './styles.css';
import Grid from './grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './toolbar';
import provide from 'react-redux-provide';
import Dashboard from './dashboard';
import { compose, setPropTypes, setDisplayName } from 'recompose';

const enhance = compose(
  provide,
  setDisplayName('Dashboard'),
  setPropTypes({
    dashboardDialogOpen: PropTypes.bool.isRequired
  })
);

export default enhance(() =>
  <MuiThemeProvider>
    <div className={styles.main}>
      <Toolbar/>
      <Grid/>
      <Dashboard/>
    </div>
  </MuiThemeProvider>);
