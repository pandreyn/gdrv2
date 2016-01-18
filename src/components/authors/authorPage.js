"use strict";

var React = require('react');
var Promise = require('promise');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    };
  },

  componentDidMount: function () {

    var that = this;

    if (this.isMounted()) {
      new Promise(function (resolve) {
        resolve(AuthorApi.getAllAuthors());
      }).then(function (authors) {
        that.setState({authors: authors});
      });
    }
    //this.setState({authors: AuthorApi.getAllAuthors()});
  },

  render: function () {
     return (
        <div>
          <h1>Авторы</h1>
          <AuthorList authors={this.state.authors} />
        </div>
    );
  }
});

module.exports = AuthorPage;