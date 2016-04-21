import values from 'lodash.values';
import { unshiftEnhancer, pushMiddleware } from 'react-redux-provide';
import createLogger from 'redux-logger';

const ignoredActions = ['EFFECT_RESOLVED', 'EFFECT_TRIGGERED'];

const config = {
  devtools: {
    actionsBlacklist: ignoredActions
  },
  logger: {
    collapsed: true,
    predicate: (_, action) => !ignoredActions.includes(action.type)
  }
};

function connectDevtools(providers) {
  values(providers).forEach(provider => {
    unshiftEnhancer(
      { provider },
      window.devToolsExtension(config.devtools)
    );
  });
}

function connectLogger(providers) {
  pushMiddleware(providers, createLogger(config.logger));
}

export default function(providers) {
  if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    connectDevtools(providers);
    connectLogger(providers);
  }
}
