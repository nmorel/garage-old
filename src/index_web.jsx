import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

/*
 Needed for onTouchTap
 Can go away when react 1.0 release
 Check this repo:
 https://github.com/zilverline/react-tap-event-plugin
 */
injectTapEventPlugin();

import routes from './app';

const history = useBasename(createHistory)();
ReactDOM.render(<Router history={history} routes={routes}/>, document.getElementById('app'));
