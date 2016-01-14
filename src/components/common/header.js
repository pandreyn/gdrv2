"use strict";

var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a href="/" className="navbar-brand"></a>
            <ul className="nav navbar-nav">
              <li><a href="/">Главная</a></li>
              <li><a href="/#about">О программе</a></li>
            </ul>
          </div>
        </nav>
    );
  }
});

module.exports = Header;