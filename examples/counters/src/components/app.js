import React from 'react';
import Combined from './combined-view';
import NavBar from './nav-bar';

const paths = [
  { text: 'Counter1', path: '/counter1' },
  { text: 'Counter2', path: '/counter2' }
];

const App = ({ children, location }) => {
  return <div>
    <NavBar pathname={location.pathname}
      paths={paths}/>
    {children}
    <Combined />
  </div>;
};

App.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.any
};

export default App;
