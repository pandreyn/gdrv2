'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Lifecycle = ReactRouter.Lifecycle;
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

  mixins: [
    ReactRouter.History,
    Lifecycle
  ],

  routerWillLeave(nextLocation) {
    if (this.state.dirty)
      return 'Your work is not saved! Are you sure you want to leave?'
  },

  getInitialState: function () {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function () {
    var that = this;
    var authorId = this.props.params.id;

    if (authorId) {
      AuthorApi
          .getAuthorById(authorId)
          .then(function (author) {
            that.setState({author: author});
          });
    }
  },

  setAuthorState: function (event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  authorFormIsValid: function () {
    var formIsValid = true;
    this.state.errors = {}; //clear all previous errors.

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveAuthor: function (event) {
    var that = this;
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }


    AuthorApi
        .saveAuthor(this.state.author)
        .then(function () {
          that.setState({dirty: false});
          toastr.success('Author saved.');
          that.context.history.pushState(null, `/authors`);
        }, function (err) {
          toastr.error('Error saving: ' + err);
        });
  },

  cancelEdit: function(){
    this.context.history.pushState(null, `/authors`);
  },

  render: function () {
    return (
        <AuthorForm
            author={this.state.author}
            onChange={this.setAuthorState}
            onSave={this.saveAuthor}
            errors={this.state.errors}
            onCancel={this.cancelEdit}/>
    );
  }
});

module.exports = ManageAuthorPage;