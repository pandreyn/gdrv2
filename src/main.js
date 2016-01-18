"use strict";

var React = require('react');

var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var routes = require('./routes');

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app')) ;

//render(<Router>{routes}</Router>, el)