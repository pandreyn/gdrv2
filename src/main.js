"use strict";

var React = require('react');

var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app')) ;