/**
 * Generate an unique identifier for an article.
 * @param index Index of the article in the list
 * @param prefix Prefix to append to the id
 * @returns {string} An unique identifier based on params
 */
export default function (index, prefix) {
  return prefix ? prefix + '_' + index : 'article_' + index;
}
