import React from 'react';
import styles from './Paragraph.scss';
/**
 * Reprensents a paragraph in an article
 */
class Paragraph extends React.Component {
  static propTypes = {
    paragraph: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: this.props.paragraph.text }}/>;
  }
}

export default Paragraph;
