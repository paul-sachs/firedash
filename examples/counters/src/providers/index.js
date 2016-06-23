import counter1 from './counter1';
import counter2 from './counter2';

import provideRouter from 'provide-router';
import { browserHistory } from 'react-router';
import { applyMiddleware } from 'redux';

const router = provideRouter(browserHistory);
// export default {
//   counter1,
//   counter2,
//   router
// };

// alternatively, you can make one provider so actions can be seen
// and issued between different providers.

const actions = {
  ...counter1.actions,
  ...counter2.actions,
  ...router.actions
};

const reducers = {
  ...counter1.reducers,
  ...counter2.reducers,
  ...router.reducers
};

const middleware = [
  counter1.middleware,
  router.middleware
];

const enhancer = [
  counter1.enhancer,
  applyMiddleware(...middleware)
];

const onInstantiated = [
  router.onInstantiated
];

const replication = [
  counter1.replication,
  counter2.replication
];

export default {
  root: {
    actions,
    reducers,
    enhancer,
    replication,
    onInstantiated
  }
};
