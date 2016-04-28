import 'babel-polyfill';
import 'react-redux-provide/lib/install';

import React from 'react';
import { render } from 'react-dom';
import { reloadProviders, pushEnhancer } from 'react-redux-provide';

import providers from './providers';
import App from './components';


pushEnhancer(
  providers,
  (process.env.NODE_ENV && window.devToolsExtension) ? window.devToolsExtension() : f => f
);

const context = {
  providers
};

render(<App { ...context }/>, document.getElementById('app'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept([
      './providers/index',
      '.'
    ], () => {
      reloadProviders(require('./providers').default);
    });
  }
}
