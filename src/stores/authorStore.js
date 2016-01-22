'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function(){
    return _authors;
  },

  getAuthorById: function(id){
    var authors = _authors.filter(function(author){
      return author.id == id;
    });
    return authors && authors[0];
  }

});


Dispatcher.register(function (action) {

  switch (action.actionType){
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.DELETE_AUTHOR:
      _authors = _authors.filter(function(author){
        return author.id != action.authorId;
      });
      AuthorStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = AuthorStore;