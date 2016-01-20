"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var menus = [
  {path: '/', name: 'Главная'},
  {path: 'authors', name: 'Authors'},
  {path: 'about', name: 'О программе'}
];

var Header = React.createClass({

  mixins: [
    ReactRouter.History
  ],

  contextTypes: {
    location: React.PropTypes.object
  },

  isActiveClass: function (route) {
    return route.replace('/', '') === this.context.location.pathname.replace('/', '') ? 'active' : '';
  },

  render: function () {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <span className="glyphicon glyphicon-flash" aria-hidden="true"/>
            </Link>
            <ul className="nav navbar-nav">

              {menus.map(function(menu) {
                return  <li key={menu.name}
                           className={this.isActiveClass(menu.path)}>
                          <Link to={menu.path}>{menu.name}</Link>
                        </li>;
              }.bind(this))}

            </ul>
          </div>
        </nav>
    );
  }
});

module.exports = Header;