"use strict";

var _ = require('lodash');
var $ = require('jquery');
var apiPath = 'api/author';

var _clone = function (item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var AuthorApi = {
  getAllAuthors: function () {
    return $.getJSON(apiPath, function (data) {
      return data;
    });
  },

  getAuthorById: function (id) {
    return $.getJSON(apiPath, {id: id}, function (author) {
      return author;
    });
  },

  saveAuthor: function (author) {
    if (author.id) {
      return $.ajax({
        url: apiPath,
        type: 'PUT',
        data: {author: author}
      });
    } else {
      return $.ajax({
        url: apiPath,
        type: 'POST',
        data: {author: author}
      });
    }
  },

  deleteAuthor: function (id) {
    return $.ajax({
      url: apiPath,
      type: 'DELETE',
      data: {id: id}
    });

    //console.log('Pretend this just deleted the author from the DB via an AJAX call...');
    //_.remove(authors, {id: id});
  }
};

module.exports = AuthorApi;