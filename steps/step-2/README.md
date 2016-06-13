## Workshop Step 2
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

<br/>
##### SASS

Let's now move on to a more complicated example, loading SASS stylesheets:

To load SASS stylesheets into our project we'll have to use a combination of 3 different loaders:

1. A `SASS` loader to compile the stylesheets.
2. A `CSS` loader to read the results of the compiled CSS file.
3. A `Style` loader to load the stylesheet in the browser as part of the bundle.

To do so, we'll have to specify a series of loaders. In the configuration file, notice that the `.scss` entry has a place holder for a `loaders` array instead of a single `loader`, go ahead and specify the loaders in reverse order from the last step to the first. The order of the loaders is the order of operations the processed file will be piped through.

<br/>
##### ES6 with Babel

Finally, we want to process and transpile our JavaScript. To do so we'll load our JavaScript files using the `babel` loader but we'll have to configure Babel to transpile using the `babel-preset-es2015` that we installed earlier from `npm`.

In the configuration file look at the entry matching `.js` and `.jsx` files, apply the correct loader.

We also need to pass in some configuration parameters through the `query` key. In the `presets` specify that we want to use the `es2015` loader, that will make babel load files through the `babel-preset-es2015` preset.

<br/>
#### Loading assets in JavaScript

Let's go through the code of `index.js` in the `app` folder and see what happens:

1. SASS stylesheets are imported directly in our JS code
2. HTML templates are also imported directly
3. We're using ES6 features in browser code

This is one of the coolest features of webpack, we're able to load stylesheets and templates directly from out JavaScript code! This means that a JavaScript will have all of its dependencies declared directly in code.


This simple snippet will load the styles and the template and render the template for each programming language in the array.

Go ahead and make some changes to the template and stylesheet in `style.scss` and `template.html`, you can also add another programming language in the array to see what happens.

Don't forget to re-run `webpack` to bundle the updated files.

<br/>
#### Testing the build

Open `index.html` in your browser, check that the list of styled programming languages and their creators has been rendered correctly.

# Workshop Excercise

- Add the `handlebars-loader` to the HTML loader, you only need to specify the loader name, not the full `-loader`.

- Add all the necessary SCSS loaders: Style, CSS and SCSS in the correct order in the loaders array.

- Add the `babel-loader` to the JS loader, you must also specify the right parameters to user the `es2015-preset`.

- Run webpack and open `index.html` in the browser to see the result.
