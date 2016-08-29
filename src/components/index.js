import React, { PropTypes } from 'react';
import styles from './styles.css';
import Grid from './grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './toolbar';
import provide from 'react-redux-provide';
import Dashboard from './dashboard';
import { compose, setPropTypes, setDisplayName } from 'recompose';

import Dialog from 'material-ui/Dialog';

const enhance = compose(
  provide,
  setDisplayName('Dashboard'),
  setPropTypes({
    dashboardDialogOpen: PropTypes.bool.isRequired
  })
);

export default enhance(({ dashboardDialogOpen }) =>
  <MuiThemeProvider>
    <div className={styles.main}>
      <Toolbar/>
      <Grid/>
      <Dialog title='Dashboard'
        open={dashboardDialogOpen}
        modal={false}>
        <Dashboard/>
      </Dialog>
    </div>
  </MuiThemeProvider>);
