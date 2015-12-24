function createGa(window, document, script, url, r, tag, firstScriptTag) {
  window['GoogleAnalyticsObject'] = r;
  window[r] = window[r] || function() {
      (window[r].q = window[r].q || []).push(arguments);
    };
  window[r].l = 1 * new Date();
  tag = document.createElement(script);
  firstScriptTag = document.getElementsByTagName(script)[0];
  tag.async = 1;
  tag.src = url;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function init(history) {
  if (window.location.hostname === 'localhost') {
    return;
  }

  createGa(
    window,
    document,
    'script',
    '//www.google-analytics.com/analytics.js',
    'ga'
  );

  window.ga('create', 'UA-71726923-1', 'auto');

  history.listen((location) => {
    let path = location.pathname;
    if (path[path.length - 1] === '/') {
      path = path.substring(0, path.length - 1);
    }

    if (path[0] !== '/') {
      path = '/' + path;
    }

    window.ga('send', 'pageview', { page: path });
  });
}

module.exports = init;
