import React from 'react';
import styles from './UnderConstruction.scss';

/**
 * Represents the 'Under construction' warning header
 */
export default class extends React.Component {
  render() {
    return (
      <div className={styles.warningContainer}>
        <div className={styles.warning}>
          <span>Site en construction</span>
        </div>
      </div>
    );
  }
}
