import React from 'react';
import provide from 'react-redux-provide';

const App = ({ children, location }) => {
  console.log(location);
  return <div>
    {children}
  </div>;
};

App.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.any
};

export default provide(App);
