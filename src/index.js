if (typeof document === 'undefined') {
  module.exports = require('./index_static.jsx');
} else {
  require('./index_web.jsx');
}
