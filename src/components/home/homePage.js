"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function(){
    return (
        <div className="jumbotron">
          <h1>Учет расходов и доходов</h1>
          <p>Это будет программа по управлению финансами</p>
          <Link to="about" className="btn btn-primary btn-lg">About</Link>
        </div>
    );
  }
});

module.exports = Home;