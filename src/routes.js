"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
    <Route path="/" component={require('./components/app')}>
      <IndexRoute component={require('./components/home/homePage')}/>
      <Route path="authors" component={require('./components/authors/authorPage')}/>
      <Route path="about" component={require('./components/about/aboutPage')}/>
      <Route path="*" component={require('./components/notFoundPage')}/>
    </Route>

);

module.exports = routes;