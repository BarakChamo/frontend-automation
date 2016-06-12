import indexTemplate from 'templates/routes/index.html';
import { IMAGES } from 'constants';

function indexRoute(ctx) {
  var images = [];

  var i,j,chunk = 3;

  for (i=0,j=IMAGES.length; i<j; i+=chunk){
    images.push(IMAGES.slice(i,i+chunk));
  }

  return indexTemplate({images: images});
}

module.exports = indexRoute;
