import React from 'react';
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
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
