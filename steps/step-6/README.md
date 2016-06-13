## Workshop Step 6
###### Containing the development environment

Our Webpack configuration is complete, but though it's automated it depends on quite a lot of local configuration and tools being available:

1. Node.js and NPM must be installed and up-to-date
2. Webpack needs to be installed globally
3. Our configuration was only tested on our machine, our OS and our versions of all tools

Not only that, we have yet to discuss deploying our code to a production server. What ports will be available to the server? Where will we get them? What version of node is installed if any?

The next step in automating and streamlining our development process is isolating our development environment from our local machine, those of our peers and the production servers.

To do that we'll use Docker, a popular containerization toolset. You can read more about Docker [here](https://www.docker.com/what-docker).

<br/>
#### Defining our container

Docker containers consume a single configuration file, a `Dockerfile`. Much like webpack, we'll use this one file to describe everything Docker needs to know to run our development server inside a virtual machine.

You can check out the full configuration file [here.](https://github.com/BarakChamo/frontend-automation/blob/master/steps/step-6/Dockerfile)


<br/>
#### Running a custom configuration

By default, when running the `webpack` command it will look for a file called `webpack.config.js`. To override the default configuration with out custom one we call the command with an additional paramter:

For development:

```webpack --config webpack.config.dev.js```

And for production:

```webpack --config webpack.config.prod.js```


# Workshop Excercise

Update production config

Update development config

Update development server to use webpack.config.dev.js instead of webpack.config.js
