## Workshop Step 3
###### Webpack automation and Node.js integration

Webpack is already proving pretty useful, bundling and processing our files and different kinds of modules. However, we still have to run the build process every time we change our files. Let's see how we can automate Webpack's build process and have it re-build on every change to our source code.

#### Watch mode

The simplest way to get Webpack to watch our files is to run it in `watch` mode. Try running the following command in your terminal:

`webpack -w`

Running webpack with the `w` flag will tell it to keep running, watch for file changes and re-build automatically. This means we can keep working on our project without having to worry about going back to the terminal and re-running webpack every time we update our code.

Try running webpack in watch mode and making a change to the stylesheet in `style.scss`, if you look at the terminal you'll notice webpack ran again and built our updated bundle automatically.


<br/>
#### Webpack Dev Server & Dev Middleware

Running webpack in watch mode is already pretty handy but we have to run it as a separate task in addition to our development server, manually refresh the browser and we might have problems serving async AJAX requests from JavaScript because our files are served from a different port to the one we run our server on.

Let's look at a better, more robust solution for integrating webpack seamlessly into our Node.js server.

##### What is the Webpack development server?
Webpack's development server and the node.js development middleware allow us to integrate webpack's build process into a static asset pipeline in an existing Node.js application.

When running our server in `development mode`, requests for static assets will go through wepack and processed on-the-fly. When running in `production mode`, static assets will be served from a pre-compiled cache, just like when we run the `webpack` command.

This allows for a seamless workflow that is the same on both production and development. All we have to do to run the build environment is run our server in development mode, no other manual processes are necessary and no other terminal windows to keep track of.

Combined with Webpack's hot-reload middleware, we won't even have to refresh our browser. When files change they will be automatically re-compiled and the browser will be refreshed.

<br/>
##### Setting up the middlewares

Start by installing the 2 node packages:

```
npm install webpack-dev-middleware webpack-hot-middleware --save-dev
```

Then open the `server.js` file in the root folder, it is a reference implementation of a dual `dev/prod` server with the middlewares set up.

In [line 12](https://github.com/BarakChamo/frontend-automation/blob/master/steps/step-3/server.js#L12), we start by checking if the server is running in development mode by reading the value of the environment variable `NODE_ENV`.

Then, in [lines 13 to 34](https://github.com/BarakChamo/frontend-automation/blob/master/steps/step-3/server.js#L13-L34) we import the webpack configuration file and pass it to the development middleware.

Calling `app.use` is `Express`'s way of handling requests, it means that any request for a static file will be intercepted by the webpack middleware and fullfilled on-the-fly from the build system, not the cached files that are used in production.

Finally, in [lines 35 to 37](https://github.com/BarakChamo/frontend-automation/blob/master/steps/step-3/server.js#L35-L37) we handle production mode, where we serve files from a pre-compiled static folder.

<br/>
##### Configuring Webpack for use by the middlewares

There are a few updates we must make to the `webpack.config.js` in order to get it to work well in a development server scenario.

Open the configuration file and let's make 2 small updates:

1. Add the `new webpack.HotModuleReplacementPlugin()` plugin in the plugins array of the configuration file.
2. Change the `app` entry point from a string to an array of strings and add `webpack-hot-middleware/client?reload=true`

This will enable webpack to accept request from the middleware endpoint and serve partial modules after they update.


<br/>
#### Running the server

To run the server in development mode, simply run `node server.js` in your console from the root folder of this step.

<br/>
#### Testing the build

Open `[http://localhost:8080](http://localhost:8080)` in your browser, you should see the same list of programming languages.

<br/>
#### Testing the middlewares

To see the real power of the middlewares, try making changes to the source files.

For example, change the background color of the list items to blue, to bundle will be automatically compiled and the browser refreshed!
