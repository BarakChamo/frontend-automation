var path = require('path');
var webpack = require('webpack');

// Import 'generic' webpack config
var config = require('./webpack.config.js');

/*
 * Deployment Plugins
 */

config.plugins.push( new webpack.optimize.OccurenceOrderPlugin() );
config.plugins.push( new webpack.optimize.UglifyJsPlugin() );

module.exports = config;
