var hello = require('./hello.js');
var render = require('./render.js');

var helloWorld = hello();

console.log(helloWorld);

render(helloWorld);
