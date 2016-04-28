import React from 'react';
import NavLink from '../nav-link';
import styles from './styles.css';

const combined = ({ paths, pathname }) => (
  <div className={styles.main}>
    {paths && paths.map((path, index) => {
      return <NavLink key={index} path={path.path} isSelected={path.path === pathname}>
        {path.text}
      </NavLink>;
    })}
  </div>
);

combined.propTypes = {
  paths: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  pathname: React.PropTypes.string.isRequired
};

export default combined;
