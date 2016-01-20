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
    AuthorApi.getAllAuthors().then(function (authors) {
      this.setState({authors: authors});
    }.bind(this));
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.getAuthors();
    }
    //this.setState({authors: AuthorApi.getAllAuthors()});
  },

  deleteAuthor: function (author) {
    if (!confirm('Delete ' + author.firstName + ' ' + author.lastName + '?')) {
      return;
    }

    AuthorApi
        .deleteAuthor(author.id)
        .then(function () {
          toastr.success('Author deleted.');
          this.getAuthors();
        }.bind(this), function (err) {
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