import React from 'react';
import ArticleElement from 'ArticleElement.jsx';
import articleIdGenerator from '../services/article-id-generator';

/**
 * Represents an article with elements of various types.
 */
class Article extends React.Component {

  static propTypes = {
    // Unique id for the article
    index: React.PropTypes.string.isRequired,

    // Level in the hierarchy. 1 means the article is at the root of the section
    level: React.PropTypes.number.isRequired,

    // The article containing a title and a list of element
    article: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      elements: React.PropTypes.arrayOf(React.PropTypes.object),
    }).isRequired,
  };

  render() {
    const level = this.props.level;

    // Using a different heading for each level. We shouldn't have more than 2 level (h3).
    const title = React.createElement('h' + (level + 1), null, this.props.article.title);
    const elements = this.props.article.elements.map((elt, index) => {
      const key = articleIdGenerator(index, this.props.index);
      return <ArticleElement key={key} index={key} level={level + 1} element={elt}/>;
    });

    return (
      <article id={this.props.index}>
        {title}
        {elements}
      </article>
    );
  }
}

export default Article;
