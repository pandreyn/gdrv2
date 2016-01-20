"use strict";

var _ = require('lodash');
var $ = require('jquery');
var apiPath = '/api/author';

var AuthorApi = {
  getAllAuthors: function () {
    return $.getJSON(apiPath, function (data) {
      return data;
    });
  },

  getAuthorById: function (id) {
    return $.getJSON(apiPath + '/' + id, function (author) {
      return author;
    });
  },

  saveAuthor: function (author) {
    var type = author.id ? 'PUT' : 'POST';
    var url = author.id ? apiPath + '/' + author.id : apiPath;

    return $.ajax({
      url: url,
      type: type,
      data: author
    });
  },

  deleteAuthor: function (id) {
    return $.ajax({
      url: apiPath + '/' + id,
      type: 'DELETE'
    });
  }
};

module.exports = AuthorApi;