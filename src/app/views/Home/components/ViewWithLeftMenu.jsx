import React from 'react';
import LeftNav from '../components/LeftNav';
import Section from '../components/Section';

/**
 * Represents a view with a left menu and a section
 */
class ViewWithLeftMenu extends React.Component {
  static propTypes = {
    // Data
    data: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div>
        <LeftNav section={this.props.data}/>
        <Section section={this.props.data}/>
      </div>
    );
  }
}

export default ViewWithLeftMenu;
