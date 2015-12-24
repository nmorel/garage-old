import React from 'react';
import styles from './App.scss';
import Header from '../Header';
import Footer from '../Footer';

/**
 * Represents the application's layout
 */
class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.container} role="main">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
