import React from 'react';
import styles from './Footer.scss';

/**
 * Represents the application's footer
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <span>&copy; 2016 - Garage Morel Régis</span>
        <span className={styles.links}>
          <a href="https://github.com/nmorel" target="_blank">Nicolas Morel</a> - <a href="http://garagemorelregis.precisium.fr/" target="_blank">Précisium</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
