var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
    vendor: ['page']
  },

  output: {
    publicPath:'/',
    path: 'dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.html$/, loader: 'handlebars'
      },
      // {
      //   test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel', query: {presets: ['es2015']}
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)/, loader: 'url-loader?limit=8192'
      }
    ]
  },

  externals: {
    // External modules
  },

  resolve: {
    // you can now require('file') instead of require('file.js') or require('file.jsx')
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    // Export all vendor code as a new chunk
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),

    // Extract text from base styles into a styles CSS file and load as a stylesheet in index.html
    new ExtractTextPlugin('styles.css')
  ]
};
