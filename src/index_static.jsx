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

        <base href={this.props.baseHref}/>

        <title>Garage Morel Régis</title>

        <link rel="icon" type="image/png" href={require('./images/favicon-32x32.png')} sizes="32x32"/>
        <link rel="icon" type="image/png" href={require('./images/favicon-16x16.png')} sizes="16x16"/>

        <meta name="author" content="Nicolas Morel"/>
        <meta name="keywords" content="garage, Morel, réparation, dépannage, essence, mécanique"/>
        <meta name="description" content="Garage Morel Régis - Réparation, Dépannage, Essence, Véhicules d'occasions"/>
        <meta name="geo.region" content="FR-50"/>
        <meta name="geo.placename" content="Pontaubault"/>
        <meta name="geo.position" content="48.625648;-1.347121"/>
        <meta name="ICBM" content="48.625648, -1.347121"/>

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

  match({routes, location, basename: props.baseHref}, (error, redirectLocation, renderProps) => {
    // Application element that will be overriden on client
    props.appHtml = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);

    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Page, props));
    callback(null, '<!DOCTYPE html>' + html);
  });
};
