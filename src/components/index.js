import React from 'react';
import styles from './styles.css';
import Grid from './grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './toolbar';
// import provide from 'react-redux-provide';
import Dashboard from './dashboard';
import { compose, lifecycle } from 'recompose';
import injectTapEventPlugin from 'react-tap-event-plugin';

const enhance = compose(
  lifecycle({
    componentWillMount() {
      injectTapEventPlugin();
    }
  })
);

export default enhance(() =>
  <MuiThemeProvider>
    <div className={styles.main}>
      <Toolbar/>
      <Grid/>
      <Dashboard/>
    </div>
  </MuiThemeProvider>
);
