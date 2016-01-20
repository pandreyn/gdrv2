"use strict";

module.exports = {
  detectCurrentPlatform: function () {
    switch (process.platform) {
      case 'darwin':
        return process.arch === 'x64' ? 'osx64' : 'osx32';

      case 'win32':
        return (process.arch === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')) ? 'win64' : 'win32';

      case 'linux':
        return process.arch === 'x64' ? 'linux64' : 'linux32';
    }
  },

  clone: function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  }

};