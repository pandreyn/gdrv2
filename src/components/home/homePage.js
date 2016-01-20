"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function(){
    return (
        <div className="jumbotron">
          <p>тест react.js</p>
          <Link to="about" className="btn btn-primary btn-lg">About</Link>
        </div>
    );
  }
});

module.exports = Home;