import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { App } from './components';

render(<App />, document.getElementById('COMMUNITY_FEED_CONTAINER'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}
