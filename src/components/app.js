import React from 'react';
import 'react-redux-provide/lib/install';
import styles from './app.css';
import Grid from './grid';
export default () =>
  <div className={styles.main}>
    <Grid/>
  </div>;
