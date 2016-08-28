import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import connectDevtools from './common/devtools';
import App from './components';
import providers from './providers';
import injectTapEventPlugin from 'react-tap-event-plugin';

connectDevtools(providers);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const props = { providers };
render(<App {...props}/>, document.getElementById('app'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}
