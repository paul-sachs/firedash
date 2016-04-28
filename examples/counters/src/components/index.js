import React from 'react';
import App from './app';
import Counter1 from './counter1';
import Counter2 from './counter2';
import { Router, Route, IndexRoute } from 'react-router';

const router = () => {

  return <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Counter1}/>
      <Route path='/counter1' component={Counter1}/>
      <Route path='/counter2' component={Counter2}/>
    </Route>
  </Router>;
};

export default router;
