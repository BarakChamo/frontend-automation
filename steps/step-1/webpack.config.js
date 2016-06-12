var path = require('path');
var webpack = require('webpack');

var buildPath = path.resolve(__dirname, 'dist');
var srcPath = path.resolve(__dirname, 'app');

module.exports = {
  entry: {
    app: [
      path.resolve(srcPath, 'index.js')
    ]
  },

  output: {
    publicPath:'/',
    path: buildPath,
    filename: '[name].js',
  },

  module: {
    loaders: [
      // Module loaders
    ]
  },

  externals: {
    // External modules
  },

  resolve: {
  },

  plugins: [
    // Plugins
  ]
};
