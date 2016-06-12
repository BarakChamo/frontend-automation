var path = require('path');
var webpack = require('webpack');

// Import 'generic' webpack config
var config = require('./webpack.config.js');


/*
 * Hot-loading entry point
 */

config.devtool = 'eval';


/*
 * Hot-loading entry point
 */

config.entry.app.push('webpack-hot-middleware/client?reload=true');


/*
 * Development Plugins
 */

config.plugins.push( new webpack.HotModuleReplacementPlugin() );
config.plugins.push( new webpack.NoErrorsPlugin() );

module.exports = config;
