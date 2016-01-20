'use strict';

var React = require('react');
var Input = require('../common/textInput');
var Link = require('react-router').Link;

var AuthorForm = React.createClass({

  propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    error: React.PropTypes.object,
    prevPage: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
        <form>

          <h1>Manage Author</h1>
          <Input
              name="firstName"
              label="First Name"
              value={this.props.author.firstName}
              onChange={this.props.onChange}
              error={this.props.errors.firstName}/>

          <Input
              name="lastName"
              label="Last Name"
              value={this.props.author.lastName}
              onChange={this.props.onChange}
              error={this.props.errors.lastName}/>

          <input type="submit" value="Save" className="btn btn-default"
                 onClick={this.props.onSave}/>

          <Link className="pull-right btn btn-default" to={this.props.errors.prevPage}>Cancel</Link>
        </form>
    );
  }
});

module.exports = AuthorForm;