## Workshop Step 1
###### Setting up Webpack and basic module loading

In this part of the workshop we'll set up the Webpack config file,
`webpack.config.js`, to load the correct files and output the processed bundle to the correct place.


#### Installing Webpack

The Webpack bundler is installed globally by running the following command:

`npm install -g webpack`

You might have to run it in administrator mode, depening on your user's permissions.

We also need to install webpack locally to make it available to our configuration file.

`npm install webpack --save-dev`

<br/>
#### The Webpack configuration file

Webpack operates on a set of instructions defined in the `webpack.config.js` file in the root of our project. When we run the `webpack` command it will look for that file for instructions on how to process our code.

These instructions include:
1. The location of the entry point, the first JS file in our project.
2. The output directory for the processed bundle.
3. Any module loaders and how to use them.
4. Webpack plugins

We'll cover the basics of getting an initial configuration up and running.

<br/>
#### Entry points and output bundles

To get started, open `webpack.config.js` and fill in the path in `entry.app`, direct it to the `index.js` file in our `app` folder.

Likewise, configure the output `path` and `filename` so that our bundle will be generated as a file named `bundle.js` in the `dist` folder.


<br/>
#### Building the bundle

Looking through `index.js`, you'll notice our main file requires two additional modules, `hello.js` and `render.js`, we must bundle them together to be able to run this code in the browser.

To build the bundle run the `webpack` command in the root folder of `step-1`, Webpack will automatically detect the configuration file.


<br/>
#### Testing the build

Open `index.html` in your browser, check that `Hello World` has been rendered correctly.

# Workshop Excercise

Excercise details
