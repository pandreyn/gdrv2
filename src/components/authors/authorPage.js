"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var toastr = require('toastr');

var AuthorPage = React.createClass({

  getInitialState: function () {
    return {
      authors: []
    };
  },

  getAuthors: function(){
    var that = this;
    AuthorApi.getAllAuthors().then(function (authors) {
      that.setState({authors: authors});
    });
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.getAuthors();
    }
    //this.setState({authors: AuthorApi.getAllAuthors()});
  },

  deleteAuthor: function (author) {
    var that = this;

    if (!confirm('Delete ' + author.firstName + ' ' + author.lastName + '?')) {
      return;
    }

    AuthorApi
        .deleteAuthor(author.id)
        .then(function () {
          toastr.success('Author deleted.');
          that.getAuthors();
        }, function (err) {
          toastr.error('Error deleting: ' + err);
        });
  },

  render: function () {
    return (
        <div>
          <h1>Авторы</h1>
          <Link to="author" className="btn btn-default">Добавить</Link>
          <AuthorList
              authors={this.state.authors}
              delete={this.deleteAuthor}/>
        </div>
    );
  }
});

module.exports = AuthorPage;