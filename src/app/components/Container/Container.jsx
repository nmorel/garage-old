import React from 'react';
import styles from './Container.scss';

/**
 * Represents a container with max width and centered content
 */
export default class extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
