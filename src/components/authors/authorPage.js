"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var toastr = require('toastr');

var AuthorPage = React.createClass({

  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  //componentDidMount: function () {
  //  if (this.isMounted()) {
  //    this.setState({authors: AuthorStore.getAllAuthors()});
  //  }
  //},

  deleteAuthor: function (author) {
    if (!confirm('Delete ' + author.firstName + ' ' + author.lastName + '?')) {
      return;
    }

    AuthorActions
        .deleteAuthor(author.id)
        .then(function () {
          toastr.success('Author deleted.');
          this.setState({authors: AuthorStore.getAllAuthors()});
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