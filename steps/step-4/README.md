## Workshop Step 4
###### Chunk Splitting

Let's consider at a *'real world'* example of a JavaScript single page application. 

When handling front-end routing we enable the user to access different parts of the application without reloading the page. The problem is that when we bundle JavaScript assets, all the routes end up being bundled into one big file that has to support any possible route of the application.

The solution to that problem is code splitting, a technique of marking distinct parts of the application as separate and loading them incrementaly as separate JavaScript modules. These modules are loaded asyncronously only when they are required.

Read more about code splitting [here.](https://webpack.github.io/docs/code-splitting.html)

<br/>
#### Chunk Splitting Example

Take this simple router for example:

```javascript
var router = new Router({
    '/(foo)': props => require('./routes/foo'),

    '/bar'  : props => require('./routes/bar'),

    '/:baz' : props => require('./routes/baz'),
})
```

The structure of the code implies that the models required (`foo`, `bar`, `baz`) are available at the time this code is executed. This structure will not leverage splitting and all modules will have to be bundled into one big JavaScript file to ensure they are available at run time.


Let's look at the same router with splitting implemented:

```javascript
var router = new Router({
    '/(foo)': props => require.ensure(['./routes/foo'], require => {
        var route = require('./routes/foo')
        ...
    }),

    '/bar'  : props => require.ensure(['./routes/bar'], require => {
        var route = require('./routes/bar')
        ...
    }),

    '/:baz' : props => require.ensure(['./routes/baz'], require => {
        var route = require('./routes/baz')
        ...
    }),
})
```

In this example the requirement specified the needed module and an additional callback, allowing asyncronous of the code in the callback once the `ensure`d modules are fetched and are available.



<br/>
#### The resulting assets

In the latter example, webpack will produce a main bundle for the application entry code, where the router is initialized and the app is bootstrapped, and additional separate files for each ones of the asyncronous requirements.

This means:
1. A main entry file
2. A file for the `foo` route
3. A file for the `bar` route
4. A file for the `baz` route

That means that if a user lands on the `/foo` route only files **1** and **2** will be loaded. When they later navigate to `/bar` the 3rd file will be fetched asyncronously and the callback for that route will be executed.


<br/>
##### How to split chunks

The only chage to our code needed to trigger webpack's code splitting functionality is to transition for syncronous requirements to asynconous ones.

Going back to our previous example:

```javascript
// Syncronous requirements
'/(foo)': props => require('./routes/foo')

// Asyncronous requirements
'/(foo)': props => require.ensure(['./routes/foo'], require => {
    var route = require('./routes/foo')
    ...
  })
```

<br/>
#### Running the server

Besides updating the code to support split chunks, there is absolutely no configuration necessary. Webpack will handle the splitting in development time and the loading in runtime.


### Workshop Excercise

Excercise details
