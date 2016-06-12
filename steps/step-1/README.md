## Workshop Step 1
###### Setting up Webpack and basic module loading

In this part of the workshop we'll set up the Webpack config file, 
`webpack.config.js`, to load the correct files and output the processed bundle to the correct place.


#### Installing Webpack

The Webpack bundler is installed globally by running the following command:

`npm install -g webpack`

You might have to run it in administrator mode, depening on your user's permissions.

<br/>
#### Entry points and output bundles

To get started, open `webpack.config.js` and fill in the path in `entry.app`, direct it to the `index.js` file in our `app` folder.

Likewise, configure the output `path` and `filename` so that our bundle will be generated as a file named `bundle.js` in the `dist` folder. 


<br/>
#### Building the bundle

To build the bundle run the `webpack` command in the root folder of `step-1`, Webpack will automatically detect the configuration file.


<br/>
#### Testing the build

Open `index.html` in your browser, check that `Hello World` has been rendered correctly.

