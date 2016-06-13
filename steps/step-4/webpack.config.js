var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './app/index.js',
      'webpack-hot-middleware/client?reload=true'
    ]
  },

  output: {
    publicPath:'/dist/',
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.html$/, loader: 'handlebars'
      },
      {
        test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']
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
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
