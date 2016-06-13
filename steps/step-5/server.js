var path = require('path');
var express = require('express');

var app = express();

var isDev = process.env.NODE_ENV !== 'production';

// Load static resources
// app.use(express.static(path.join(__dirname, 'dist')));

// If in development
if (isDev) {
  var webpack = require('webpack');
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.config.js');

  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true,
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Fallback to index.html for all other requests
app.get('*', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

var port = isDev ? 8080 : process.env.PORT;

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) console.log(err);
  console.info('Listening on port ' + port);
});
