import imageTemplate from 'templates/routes/image.html';
import { IMAGES } from 'constants';

function imageRoute(ctx) {
  var images = [];

  return imageTemplate({src: IMAGES[+ctx.params.image].src});
}

module.exports = imageRoute;
