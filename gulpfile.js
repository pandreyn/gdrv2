"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence');

var onError = function (err) {
  notify.onError({
    title: "Error",
    message: "<%= error %>"
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError
};

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    fonts: 'node_modules/bootstrap/fonts/*',
    package: './src/package.json_nwjs',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

// Start a local development service
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('clean', function () {
  return del(config.paths.dist);
});

gulp.task('open', ['connect'], function () {
  gulp.src('./dist/index.html')
      .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('js', function () {
  browserify(config.paths.mainJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/scripts'))
      .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());

  gulp.src('.src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function () {
  return gulp.src(config.paths.js)
      .pipe(eslint({config: 'eslint.config.json'}))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('package', function () {
  gulp.src(config.paths.package)
      .pipe(rename('package.json'))
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('fonts', function () {
  gulp.src(config.paths.fonts)
      .pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('watch', function () {
  gulp.watch(config.paths.js, ['js', 'lint']);
  gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', function(callback) {
  runSequence('clean',
      ['html', 'js', 'css', 'fonts', 'images', 'lint'],
      'open',
      'watch',
      callback);
});

//gulp.task('default', ['clean', 'html', 'js', 'css', 'fonts', 'images', 'lint', 'open', 'watch']);
//gulp.task('nwjs', ['clean', 'html', 'js', 'css', 'fonts', 'images', 'lint', 'package']);

gulp.task('nwjs', function(callback) {
  runSequence('clean',
      ['html', 'js', 'css', 'fonts', 'images', 'lint', 'package'],
      callback);
});