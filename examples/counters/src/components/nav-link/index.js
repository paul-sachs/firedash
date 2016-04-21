import React from 'react';
import provide from 'react-redux-provide';

const navLink = ({ pushRoute, path, children, isSelected }) => (
  <a onClick={() => pushRoute(path)}>
    {children}
    {isSelected && <span> ✓ </span>}
  </a>
);

navLink.propTypes = {
  pushRoute: React.PropTypes.func.isRequired,
  children: React.PropTypes.any,
  isSelected: React.PropTypes.bool,
  path: React.PropTypes.string.isRequired
};

export default provide(navLink);
