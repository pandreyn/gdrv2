'use strict';

var express = require('express');
var router = express.Router();

var models  = require('../models');

/* GET /sites listing. */
router.get('/', function(req, res, next) {
  models.Author.findAll().then(function(authors) {
    res.json(authors);
  }, function(err) {
    return next(err);
  });
});

/* POST /sites */
router.post('/', function(req, res, next) {
  models.Author.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }).then(function(post) {
    res.json(post);
  }, function(err) {
    return next(err);
  });
});

/* GET /sites/id */
router.get('/:id', function(req, res, next) {
  models.Author.findById(req.params.id).then(function(author) {
    res.json(author);
  }, function(err) {
    return next(err);
  });
});

/* PUT /sites/:id */
router.put('/:id', function(req, res, next) {
  models.Author.findById(req.params.id).then(function(author) {
    author.updateAttributes({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).then(function(site) {
      res.json(site);
    });
  }, function(err) {
    return next(err);
  });
});

/* DELETE /sites/:id */
router.delete('/:id', function(req, res, next) {
  models.Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(post) {
    res.json(post);
  }, function(err) {
    return next(err);
  });
});

module.exports = router;