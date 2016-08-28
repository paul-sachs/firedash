import React from 'react';
import styles from './styles.css';
import Grid from './grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './toolbar';
import provide from 'react-redux-provide';

export default provide(() =>
  <MuiThemeProvider>
    <div className={styles.main}>
      <Toolbar/>
      <Grid/>
    </div>
  </MuiThemeProvider>);
