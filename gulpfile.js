/**
 * Created by apetkevich on 13.01.2016.
 */

"use strict";

var gulp = require('gulp'),
    gUtil = require('gulp-util'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
};


// Start a local development service
gulp.task('connect', function(){

});

function detectCurrentPlatform() {
  switch(process.platform) {
    case 'darwin':
      return process.arch === 'x64' ? 'osx64' : 'osx32';

    case 'win32':
      return (process.arch === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')) ? 'win64' : 'win32';

    case 'linux':
      return process.arch === 'x64' ? 'linux64' : 'linux32';
  }
}

gulp.task('default', ['nw']);

