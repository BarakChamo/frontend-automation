## Workshop Step 1
###### Using loaders and importing related assets

Now that Webpack is configured, it's time to start using it's more powerful features, starting with module loaders.

Module loaders allow us to define a chain of processing by file type, similar to a **Grunt** or **Gulp** workflow.
A processing chain is typically defined by file extension, let's look at a more advanced example using ES6 JavaScript and LESS Styles.


#### Installing the Loaders

We'll be using **Babel** to *transpile* ES6 JavaScript to browser-safe ES5, **Handlebards** to build our template file and **SASS** to compile our SCSS stylesheet to CSS.

Start by installing the following NPM packages:

```
# Babel and Babel Loader packages
npm install babel-core babel-loader babel-preset-es2015 --save-dev

# Handlebars and Handlebars Loader
npm install handlebars handlebars-loader --save-dev

# Handlebars and Handlebars Loader
npm install node-sass css-loader sass-loader style-loader --save-dev
```


<br/>
#### Configuring module loaders

We'll be configuring loaders for 3 different file types: `.js`, `.scss` and `.html`. Look at the `webpack.config.js` and you'll notice placeholders are set up for each of the file types. Let's set each one up.


##### Handlebars

Handlebars is a templating language written in HTML-like syntax, the template files need to be compiled into JavaScript functions so that we'll be able to render on the fly. To do that, we'll pass required `.html` files through the handlebards loaders.

In the configuration file, in the entry matching `.html` in `modules.loaders`, specify the correct loader for the file type - `handlebars`.

Now let's move on to a more complicated example, loading SASS stylesheets:

##### SASS



##### ES6 with Babel



<br/>
#### Building the bundle

To build the bundle run the `webpack` command in the root folder of `step-1`, Webpack will automatically detect the configuration file.


<br/>
#### Testing the build

Open `index.html` in your browser, check that `Hello World` has been rendered correctly.
