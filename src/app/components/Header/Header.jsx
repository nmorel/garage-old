import React from 'react';
import { Link } from 'react-router';
import UnderConstruction from '../UnderConstruction';
import Collapse from 'react-bootstrap/lib/Collapse';
import styles from './Header.scss';

/**
 * Represents the application"s header
 * TODO Close the navbar when changing view
 */
class Header extends React.Component {

  state = {};

  render() {
    return (
      <header id="header" className={styles.header}>
        <UnderConstruction />
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand hidden-md-up">
              <Link to="/">Garage Morel Régis</Link>
            </div>
            <div className="navbar-brand hidden-md-up" style={{float: 'right'}}>
              <button className="navbar-toggler" type="button"
                      onClick={ ()=> this.setState({ open: !this.state.open })} aria-controls="navbar-header">
                &#9776;
              </button>
            </div>
            <div className="hidden-md-up clearfix"></div>
            <Collapse in={this.state.open}>
              <div className="navbar-toggleable-sm">
                <div className="navbar-brand hidden-sm-down">
                  <Link to="/">Garage Morel Régis</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" activeClassName="active">Accueil</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/occasions" className="nav-link" activeClassName="active">Véhicules d'occasions</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/prestations" className="nav-link" activeClassName="active">Prestations</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
