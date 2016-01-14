"use strict";

var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
        <div className="jumbotron">
          <h1>Учет расходов и доходов</h1>
          <p>Это будет программа по управлению финансами</p>
        </div>
    );
  }
});

module.exports = Home;