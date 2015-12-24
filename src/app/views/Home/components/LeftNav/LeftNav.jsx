import React from 'react';
import articleIdGenerator from '../../services/article-id-generator';
import styles from './LeftNav.scss';

/**
 * Represents a menu on left side to navigate between articles in a section.
 */
class LeftNav extends React.Component {

  static propTypes = {
    // Section data
    section: React.PropTypes.shape({
      articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    }).isRequired,
  };

  state = {};

  componentDidMount() {
    document.addEventListener('scroll', this._updateLeftMenuTop);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this._updateLeftMenuTop);
  }

  /**
   * Generates the links corresponding to the articles.
   * @param articles The articles
   * @param prefixId The prefix to append to article's id
   * @returns {object} the generated element
   */
  _generateArticleLinks = (articles, prefixId) => {
    const links = articles.map((article, index) => this._generateArticleLink(article, index, prefixId));
    return <ul>{links}</ul>;
  };

  /**
   * Generates the link corresponding to the article.
   * @param article The article
   * @param index The index
   * @param prefixId The prefix to append to article's id
   * @returns {object} the generated element or undefined if the element is not an article.
   */
  _generateArticleLink = (article, index, prefixId) => {
    if (article.type && article.type !== 'article') {
      // it's not an article but a paragraph or figure
      return null;
    }

    const id = articleIdGenerator(index, prefixId);
    const anchor = <a href={'#' + id}>{article.title}</a>;

    // We also need to generate the links for sub articles
    // We do not call generateArticleLinks because some of the elements can be a paragraph or figure and we need to iterate over all to get the same id
    const subLinks = [];
    for (let i = 0; i < article.elements.length; i++) {
      const subLink = this._generateArticleLink(article.elements[i], i, id);
      if (subLink) {
        subLinks.push(subLink);
      }
    }

    let res;
    if (subLinks.length > 0) {
      res = (
        <li key={id}>
          {anchor}
          <ul>
            {subLinks}
          </ul>
        </li>
      );
    } else {
      res = (
        <li key={id}>
          {anchor}
        </li>
      );
    }

    return res;
  };

  _updateLeftMenuTop = () => {
    // we could probably do cleaner
    // by referencing the header element in main.jsx and pass it down the children for exemple
    // or have the header broadcast some event to tell its height or put it in a store like redux
    const header = document.getElementById('header');
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const top = Math.max(0, header.offsetHeight - scrollTop);
    if (top !== this.state.top) {
      this.setState({
        position: 'fixed',
        top: top,
      });
    }
  };

  render() {
    const links = this._generateArticleLinks(this.props.section.articles);
    return <nav className={styles.leftNav} style={this.state}>{links}</nav>;
  }
}

export default LeftNav;
