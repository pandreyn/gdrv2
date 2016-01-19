'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var author = require('./routes/author');
var db = require('./models');
var config = require('./config/paths');

var app = express();
var clientRoot = '/dist';

function setServerSettings() {
// view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
  app.use(favicon(__dirname + clientRoot + '/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());

  app.use('/api/author', author);
  app.use(express.static(path.join(__dirname, clientRoot)));
//app.use(express.static(path.join(__dirname, jsmpPackages)));

//  app.use(jsmpPackages, express.static(path.join(__dirname, jsmpPackages)));

  app.use('/*', function (req, res) {
    res.sendFile(path.join(__dirname, clientRoot + '/index.html'));
  });

//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// development error handler
// will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

// production error handler
// no stacktrace leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


  app.set('port', process.env.PORT || config.server.serverPort);
}

function start_www(cb) {

  setServerSettings();

  db.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), function (err) {
      if (err) {
        console.log('start error: ', err);
      }
      console.log('Express server listening on port ' + server.address().port);
      //debug('Express server listening on port ' + server.address().port);

      if (cb && typeof cb == 'function') {
        cb();
      }
    });
  });
}

module.exports = start_www;