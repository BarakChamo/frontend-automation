## Workshop Step 5
###### Production and development optimizations

On top of it's core functionality, webpack provides a lot of very useful plugins - some are good for development and others are good for production builds. Examples are the hot swapping plugin or the source minification plugin.

A good practice it to define a base `webpack.config.js` that defines the common parts of our project: the entry point, output folder, etc.

Then, define 2 additional configurations: `webpack.config.prod.js` and `webpack.config.dev.js`. These will add additional production and development functionality respectively and will not clash with each other. We can have source maps when we need them, and we can crunch our code and minify it when we want to.

<br/>
#### Splitting the webpack configuration

Note the 2 new configuration files in this folder: `webpack.config.prod.js` and `webpack.config.dev.js`.

Both of these new files require the base `webpack.config.js` as a dependency and have access to the configuration object.

We can then add specific functionality for each scenario, development and production, separately.


<br/>
#### Running a custom configuration

By default, when running the `webpack` command it will look for a file called `webpack.config.js`. To override the default configuration with out custom one we call the command with an additional paramter:

For development:

```webpack --config webpack.config.dev.js```

And for production:

```webpack --config webpack.config.prod.js```


# Workshop Excercise

Excercise details
