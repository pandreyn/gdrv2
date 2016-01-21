'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
  initApp: function(){

      AuthorApi.getAllAuthors().then(function (authors) {
        Dispatcher.dispatch({
          actionType: ActionTypes.INITIALIZE,
          initialData: {
            authors: authors
          }
        });
      });

  }
};

module.exports = InitializeActions;