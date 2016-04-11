import 'babel-polyfill';
import 'infl-fonts/fonts.css';

import React from 'react';
import { render } from 'react-dom';
import { reloadProviders, pushEnhancer } from 'react-redux-provide';

import providers from './providers';
import { App } from './components';

pushEnhancer(
  providers,
  (process.env.NODE_ENV && window.devToolsExtension) ? window.devToolsExtension() : f => f
);

const context = {
  providers,
  providedState: {
    thinkyList: []
  }
};

render(<App { ...context }/>, document.getElementById('COMMUNITY_FEED_CONTAINER'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept([
      './providers/index',
      './providers/thinky-list/index',
      '.'
    ], () => {
      reloadProviders(context);
    });
  }
}
