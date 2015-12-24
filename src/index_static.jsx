import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { createMemoryHistory } from 'history';
import { RoutingContext, match } from 'react-router';

import routes from './app';

/**
 * Represents the application's complete page used for static generation
 */
class Page extends React.Component {
  static propTypes = {
    scripts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    stylesheets: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    appHtml: React.PropTypes.string.isRequired,
    baseHref: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <html lang="fr">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <base href={this.props.baseHref} />

        <title>Test d'intégration</title>

        <link rel="shortcut icon" href={require('./images/favicon.ico')}/>

        <meta name="keywords" content="1000volts, lorem, ipsum"/>
        <meta name="description" content="Lorem ipsum dolor sit amet"/>
        <meta name="geo.placename" content="Le Rheu, Bretagne, France"/>
        <meta name="twitter:site" content="@1000_Volts"/>

        {this.props.stylesheets.map(stylesheet => <link rel="stylesheet" href={stylesheet}/>)}
      </head>

      <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: this.props.appHtml }}></div>
      {this.props.scripts.map(script => <script src={script}></script>)}
      </body>
      </html>
    );
  }
}

module.exports = function render(locals, callback) {
  const props = {
    scripts: [
      locals.assets.app,
    ],
    stylesheets: [],
    baseHref: locals.webpackStats.compilation.outputOptions.publicPath,
  };
  Object.keys(locals.webpackStats.compilation.assets).forEach(asset => {
    if (/\.css$/.test(asset)) {
      props.stylesheets.push(asset);
    }
  });

  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location, basename: props.baseHref }, (error, redirectLocation, renderProps) => {
    // Application element that will be overriden on client
    props.appHtml = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);

    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Page, props));
    callback(null, '<!DOCTYPE html>' + html);
  });
};
