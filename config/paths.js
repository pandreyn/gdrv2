'use strict';

module.exports = {

  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    favicon: './src/favicon.ico',
    fonts: 'node_modules/bootstrap/fonts/*',
    package: './src/package.json_nwjs',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/build/toastr.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  },

  'server': {
    'browserPort': 3000,
    'UIPort': 3001,
    'serverPort': 3002
  }
};
