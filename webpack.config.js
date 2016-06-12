var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var buildPath = path.resolve(__dirname, 'dist');
var srcPath = path.resolve(__dirname, 'app');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'app', 'index.js')
    ],
    vendor: ['page']
  },

  output: {
    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    publicPath:'/',
    path: buildPath,
    filename: '[name].js',
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel', query: {presets: ['es2015']} },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      { test: /\.html$/, loader: "handlebars-loader" },
      { test: /\.(otf|eot|svg|ttf|woff|woff2)/, loader: 'url-loader?limit=8192'}
    ]
  },

  externals: {

  },

  resolve: {
    // you can now require('file') instead of require('file.js') or require('file.jsx')
    extensions: ['', '.js', '.jsx'],

    // You can also require from these root folders just like NPM modules
    modulesDirectories: ['node_modules', 'resources', 'app']
  },

  plugins: [
    // Export all vendor code as a new chunk
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),

    // Extract text from base styles into a styles CSS file and load as a stylesheet in index.html
    new ExtractTextPlugin('styles.css')
  ]
};
