import React from 'react';
import { Link } from 'react-router';
import NavToggle from '../NavToggle';
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
        <NavToggle onToggleNav={this._toggleNav}/>
        <nav id="header-nav" className={navBarClasses}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" activeClassName="active">Accueil</Link>
            </li>
            <li>
              <Link to="/page1" activeClassName="active">Page 1</Link>
            </li>
            <li>
              <Link to="/page2" activeClassName="active">Page 2</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
          </ul>
        </nav>
        <h2 className={styles.title}>Ma page d'accueil</h2>
      </header>
    );
  }
}

export default Header;
