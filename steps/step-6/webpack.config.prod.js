/*
  Webpack production configuration
 */
var webpack = require('webpack');

// Import base configuration
var config = require('./webpack.config.js');


/*
 * Production optimization plugins
 */

 config.plugins.push( new webpack.optimize.OccurenceOrderPlugin() );
 config.plugins.push( new webpack.optimize.UglifyJsPlugin() );

// Re-export updated configuration
module.exports = config;
