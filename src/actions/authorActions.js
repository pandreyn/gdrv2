'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author){

    return AuthorApi
        .saveAuthor(author)
        .then(function (newAuthor) {
          Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
          });
        });
  },

  deleteAuthor: function(authorId){

    return AuthorApi
        .deleteAuthor(authorId)
        .then(function () {
          Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            authorId: authorId
          });
        });
  }
};

module.exports = AuthorActions;