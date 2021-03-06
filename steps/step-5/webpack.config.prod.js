/*
  Webpack production configuration
 */

// Import base configuration
var config = require('./webpack.config.js');


/*
 * Production optimization plugins
 */

 config.plugins.push(
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.optimize.UglifyJsPlugin(),
   new webpack.optimize.optimizeChunks()
 );

// Re-export updated configuration
module.exports = config;
