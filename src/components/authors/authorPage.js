"use strict";

var React = require('react');
var Promise = require('promise');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    };
  },

  componentWillMount: function () {

    var that = this;
    new Promise(function (resolve, reject) {
      resolve(AuthorApi.getAllAuthors());
    }).then(function (authors) {
      that.setState({authors: authors});
    });

    //this.setState({authors: AuthorApi.getAllAuthors()});
  },

  render: function () {

    var createAuthorRow = function (author) {
      return (
          <tr key={author.id}>
            <td>
              <a href={"/#authors/" + author.id}>{author.id}</a>
            </td>
            <td>{author.firstName} {author.lastName}</td>
          </tr>
      );
    };

    console.log('render this.state.authors=', this.state.authors);

    return (
        <div>
          <h1>Авторы</h1>

          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
              {this.state.authors.map(createAuthorRow, this)}
            </tbody>
          </table>
        </div>
    );
  }
});

module.exports = Authors;