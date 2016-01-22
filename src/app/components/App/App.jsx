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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header/>
        </div>
        <div className={styles.content}>
          {this.props.children}
          <div className={styles.clearBeforeFooter}></div>
        </div>
        <div className={styles.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
