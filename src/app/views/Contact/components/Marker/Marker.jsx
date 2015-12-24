import React from 'react';
import styles from './Marker.scss';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.marker}>
        <div className={styles.icon}></div>
      </div>
    );
  }
}
