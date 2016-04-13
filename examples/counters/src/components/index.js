import React from 'react';
import provide from 'react-redux-provide';
import App from './app';
import Counter1 from './counter1';
import { Router, Route, IndexRoute } from 'react-router';

const routes = ({ router }) => {
  console.log(router);
  return <Router history={router.history}>
    <Route path="/" component={App}>
      <IndexRoute component={Counter1}/>
    </Route>
  </Router>;
};

routes.propTypes = {
  router: React.PropTypes.any.isRequired
};

export default provide(routes);
