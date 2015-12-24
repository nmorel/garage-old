import React from 'react';
import Article from './Article.jsx';
import Figure from './Figure';
import Paragraph from './Paragraph';

/**
 * Represents an element in an article that can be any of [Paragraph, Figure, Article]
 */
class ArticleElement extends React.Component {
  static propTypes = {
    index: React.PropTypes.string.isRequired,
    level: React.PropTypes.number.isRequired,
    element: React.PropTypes.shape({
      type: React.PropTypes.oneOf(['paragraph', 'figure', 'article']).isRequired,
    }).isRequired,
  };

  render() {
    switch (this.props.element.type) {
      case 'paragraph':
        return <Paragraph paragraph={this.props.element}/>;
      case 'figure':
        return <Figure figure={this.props.element}/>;
      case 'article':
        return <Article index={this.props.index} level={this.props.level} article={this.props.element}/>;
      default:
        throw new Error(`Unknown article element '${this.props.element.type}'. One of ['paragraph', 'figure', 'article'] expected.`);
    }
  }
}

export default ArticleElement;
