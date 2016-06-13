var webpack = require('webpack');

module.exports = {
  entry: {
    app: '{ENTRY POINT HERE}'
  },

  output: {
    publicPath:'/dist/',
    path: __dirname + '/dist',
    filename: '{OUTPUT FILENAME HERE}',
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
