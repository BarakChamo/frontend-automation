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




<br/>
#### Running the server

<br/>
#### Testing the build

Open `index.html` in your browser, check that `Hello World` has been rendered correctly.
