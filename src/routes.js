"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// components

var app = require('./components/app');
var homepage = require('./components/home/homePage');
var authorPage = require('./components/authors/authorPage');
var manageAuthorPage = require('./components/authors/manageAuthorPage');
var aboutPage = require('./components/about/aboutPage');
var notFoundPage = require('./components/notFoundPage');

var routes = (
    <Route path="/" component={app}>
      <IndexRoute component={homepage}/>
      <Route path="authors" component={authorPage}/>
      <Route path="author" component={manageAuthorPage}/>
      <Route path="author/:id" component={manageAuthorPage}/>
      <Route path="about" component={aboutPage}/>
      <Route path="*" component={notFoundPage}/>
    </Route>
);

module.exports = routes;