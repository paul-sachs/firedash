import React from 'react';
import provide from 'react-redux-provide';
import App from './app';
import Counter1 from './counter1';
import Counter2 from './counter2';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

const routes = () => {
  return <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Counter1}/>
      <Route path='/counter1' component={Counter1}/>
      <Route path='/counter2' component={Counter2}/>
    </Route>
  </Router>;
};

// A little strange that we need to wrap the routes in a provide but necessary
// until the bug is fixed.
export default provide(routes);
