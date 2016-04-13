import React from 'react';
import provide from 'react-redux-provide';

const navLink = ({ push = ()=>{}, path, children, isSelected }) => (
  <a onClick={() => push(path)}>
    {children}
    {isSelected && <span> ✓ </span>}
  </a>
);

navLink.propTypes = {
  push: React.PropTypes.func,
  children: React.PropTypes.any,
  isSelected: React.PropTypes.bool,
  path: React.PropTypes.string.isRequired
};

export default provide(navLink);
