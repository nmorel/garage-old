import React from 'react';
import styles from './NavToggle.scss';

/**
 * Represents a button used to toggle navigation
 */
class NavToggle extends React.Component {
  static propTypes = {
    onToggleNav: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <button id="header-nav-toggle" className={styles.navToggle} type="button" onClick={this.props.onToggleNav}>
        <span className={styles.iconBar}/>
        <span className={styles.iconBar}/>
        <span className={styles.iconBar}/>
      </button>
    );
  }
}

export default NavToggle;
