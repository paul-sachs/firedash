import counter1 from './counter1';
import counter2 from './counter2';
import provideRouter from 'provide-router';
import { browserHistory } from 'react-router';

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
  router.enhancer
];

// Use this export instead:

export default {
  root: {
    actions,
    reducers,
    middleware,
    enhancer
  }
};
