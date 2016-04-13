import React from 'react';
import provide from 'react-redux-provide';

import styles from './app.css';

export default provide(() => <div className={styles.main}>Hello World</div>);
