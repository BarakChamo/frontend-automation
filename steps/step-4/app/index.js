import './style.scss';
import page from 'page';

import headerTemplate from './templates/app.html';

/*
 * Application Layout
 */


document.getElementById('app').innerHTML = headerTemplate();
var app = document.getElementById('container');

/*
 * Setup Application Router
 */

// Define base route
page.base('/');


/*
 * Route handlers
 */

function applyRoute(ctx){
  app.innerHTML = ctx.route;
}

// Image view route
page('image/:image', (ctx, next) => require.ensure(['./routes/image.js'], function(require){
  var imageRoute = require('./routes/image.js');
  ctx.route = imageRoute(ctx);
  next();
}), applyRoute);

// Index Route (redirect all other ones here)
page('/', (ctx, next) => require.ensure(['./routes/index.js'], function(require){
  var indexRoute = require('./routes/index.js');
  ctx.route = indexRoute();
  next();
}), applyRoute);


// Bootstrap page
page();
