/*
  Webpack development configuration
 */

// Import base configuration
var config = require('./webpack.config.js');


/*
 * Set a development tool (source maps mode)
 */

config.devtool = 'eval';


/*
 * Add a hot-loading entry point
 */

config.entry.app.push('webpack-hot-middleware/client?reload=true');


/*
 * Add Development Plugins
 */

config.plugins.push( new webpack.HotModuleReplacementPlugin() );
config.plugins.push( new webpack.NoErrorsPlugin() );

// Re-export updated configuration
module.exports = config;
