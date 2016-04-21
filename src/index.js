import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
// import connectDevtools from './common/devtools';

import { App } from './components';

render(<App />, document.getElementById('app'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}
