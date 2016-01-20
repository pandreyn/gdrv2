"use strict";

var React = require('react');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var LinkContainer = require('react-router-bootstrap').LinkContainer;

var Header = React.createClass({
  render: function(){
    return (

    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/"><NavItem eventKey={1}>Главная</NavItem></LinkContainer>
          <LinkContainer to="authors"><NavItem eventKey={2}>Authors</NavItem></LinkContainer>
          <LinkContainer to="about"><NavItem eventKey={3}>О программе</NavItem></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
});

module.exports = Header;