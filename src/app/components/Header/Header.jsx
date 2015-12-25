import React from 'react';
import { Link } from 'react-router';
import NavToggle from '../NavToggle';
import UnderConstruction from '../UnderConstruction';
import styles from './Header.scss';

/**
 * Represents the application"s header
 */
class Header extends React.Component {

  state = {
    navOpened: false,
  };

  _toggleNav = () => {
    this.setState({
      navOpened: !this.state.navOpened,
    });
  };

  render() {
    const navBarClasses = this.state.navOpened ? styles.nav + ' ' + styles.opened : styles.nav;

    return (
      <header id="header" className={styles.header}>
        <UnderConstruction />
        <div className={styles.navContainer}>
          <NavToggle onToggleNav={this._toggleNav}/>
          <div className={styles.navBrand}>Garage Morel Régis</div>
          <nav id="header-nav" className={navBarClasses}>
            <ul className={styles.navLinks}>
              <li>
                <Link to="/" activeClassName={styles.active}>Accueil</Link>
              </li>
              <li>
                <Link to="/occasions" activeClassName={styles.active}>Véhicules d'occasions</Link>
              </li>
              <li>
                <Link to="/prestations" activeClassName={styles.active}>Prestations</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName={styles.active}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
