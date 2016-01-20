"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({

  mixins: [
    ReactRouter.History
  ],

  contextTypes: {
    location: React.PropTypes.object
  },

  isActiveClass: function (route) {
    return route === this.context.location.pathname.replace('/', '') ? 'active' : '';
  },

  render: function () {

    console.log('header this.context.location = ', this.context.location);

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <span className="glyphicon glyphicon-flash" aria-hidden="true"/>
            </Link>
            <ul className="nav navbar-nav">
              <li className={this.isActiveClass('')}><Link to="/">Главная</Link></li>
              <li className={this.isActiveClass('authors')}><Link to="authors">Authors</Link></li>
              <li className={this.isActiveClass('about')}><Link to="about">О программе</Link></li>
            </ul>
          </div>
        </nav>
    );
  }
});

module.exports = Header;