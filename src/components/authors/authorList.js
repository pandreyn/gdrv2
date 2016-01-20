"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AuthorList = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired,
    delete: React.PropTypes.func.isRequired
  },

  onClick: function(id){
    this.props.delete(id);
  },

  render: function () {

    var createAuthorRow = function (author) {
      var boundClick = this.onClick.bind(this, author);
      return (
          <tr key={author.id}>
            <td>
              <Link to={`author/${author.id}`}>{author.id}</Link>
            </td>
            <td>{author.firstName} {author.lastName}</td>
            <td><button className="btn btn-default" onClick={boundClick}>Delete</button></td>
          </tr>
      );
    }.bind(this);

    return (
        <div>

          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
              {this.props.authors.map(createAuthorRow, this)}
            </tbody>
          </table>
        </div>
    );
  }
});

module.exports = AuthorList;