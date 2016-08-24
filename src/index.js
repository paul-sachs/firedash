import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
// import connectDevtools from './common/devtools';
import App from './components';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<App />, document.getElementById('app'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}
