import React, { PropTypes } from 'react';
import provide from 'react-redux-provide';
import { applyContainerQuery } from 'react-container-query';

import OppCard from '@influitive/opportunity-card';
import styles from './styles.css';

const cardList = ({ thinkyList, userRefreshThinkyList }) => (
  <div className={`${styles.main} ${open}`}>
    <div className={styles.cardList}>
      {[...thinkyList].map(([id, card]) => (
        <div key={id} className={styles.card}>
          <OppCard rows={card.components} />
        </div>
      ))}
      <button onClick={userRefreshThinkyList}>facebook</button>
    </div>
  </div>
);

cardList.propTypes = {
  thinkyList: PropTypes.any,
  userRefreshThinkyList: PropTypes.func,
  setThinkyList: PropTypes.func
};

const query = {
  width_under_670: {
    maxWidth: 670
  },
  width_between_681_and_1015: {
    minWidth: 681,
    maxWidth: 1015
  },
  width_between_1016_and_1351: {
    minWidth: 1016,
    maxWidth: 1351
  },
  width_between_1352_and_1685: {
    minWidth: 1352,
    maxWidth: 1685
  },
  width_between_1686_and_2020: {
    minWidth: 1686,
    maxWidth: 2020
  }
};

export default applyContainerQuery(provide(cardList), query, { setAttribute: true });
