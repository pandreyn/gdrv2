"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function(){
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >
              <span className="glyphicon glyphicon-flash" aria-hidden="true"></span>
            </Link>
            <ul className="nav navbar-nav">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="authors">Authors</Link></li>
              <li><Link to="about">О программе</Link></li>
            </ul>
          </div>
        </nav>
    );
  }
});

module.exports = Header;