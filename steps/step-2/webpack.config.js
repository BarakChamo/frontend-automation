var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/index.js'
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
      }
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
