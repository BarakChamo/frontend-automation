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

Let's go through and understand each part of the Dockerfile:

```yml
# Build the container on top of an existing container running node.js version 5.9.0
FROM node:5.9.0

# Go to the /tmp directory (like cd ___ in linux)
WORKDIR /tmp

# Add the package.json file from our local folder to the /tmp/ folder in the container
ADD package.json /tmp/

# Configure npm to use a private registry (improves npm install performance)
# then run npm install to install project dependencies
RUN npm config set registry http://registry.npmjs.org/ && npm install -q --production

# Move the the app directory
WORKDIR /usr/src/app

# Link the contents of the current local folder to the app directory in the container
ADD . /usr/src/app/

# Copy the installed node_modules to the app directory
RUN cp -a /tmp/node_modules /usr/src/app/

# Run the NPM build script (our own defined build command)
RUN npm run build

# Default to a production environment 
ENV NODE_ENV=production

# Set the default port for the server to 8080
ENV PORT=8080

# Run the command `npm start`
CMD [ "/usr/local/bin/npm", "start" ]

# Expose port 8080 to the local machine
EXPOSE 8080

```


<br/>
#### Running a Docker container

##### Start the VM
First, we need to start the virtual machine if it's not already running:

`docker-machine start default`

Once `docker-machine` is running we need to find out it's IP, this is a different process depending on your OS:

On Mac/Linux:

`eval $(docker-machine env default)`

On Windows (in cmd):

`docker-machine.exe env --shell cmd dev`

<br/>
##### Start Docker

We're now ready to start the docker container. Run the following:

`docker run -p 80:8080 -e NODE_ENV=development workflow-docker`

We're telling docker to start the container, map port `8080` in the container to the local port `80` and set the environment to `development`, not the default `production`.

Our development environment is now running inside the container, exposing a port for us to access the web app and listening for changes on our local files!

<br/>
#### Accessing the container

To access the web app run the following command in your terminal:

On Mac/Linux:
`open http://$(docker-machine ip default)`

On Windows:
`docker-machine.exe env --shell cmd dev`

and then

`explorer {ip}`

or simply go to the container's ip in your browser.


# Workshop Excercise

Update production config

Update development config

Update development server to use webpack.config.dev.js instead of webpack.config.js
