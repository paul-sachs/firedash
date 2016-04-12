import React, { PropTypes } from 'react';
import provide from 'react-redux-provide';

import styles from './styles.css';

const cardList = ({ map, userRefreshMap }) => (
  <div className={styles.cardList}>
    {[...map].map(([id, card]) => (
      <div key={id} className={styles.card}>
        <div>ID:{card.id}</div>
        <div>TYPE:{card.type}</div>
      </div>
    ))}
    <button onClick={userRefreshMap}>Perform Fetch</button>
  </div>
);

cardList.propTypes = {
  map: PropTypes.any,
  userRefreshMap: PropTypes.func
};

export default provide(cardList);
