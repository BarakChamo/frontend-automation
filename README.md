# Frontend Automation
Workshop on Front-end Development Automation

## Following the workshop

## Running the complete development environment

#### Building the docker container
From the project folder, run:

```$ docker build -t workflow-docker .```

#### To run the environment in ```development``` mode
```$ docker run --name my-webpack-docker -p 80:4000 -e NODE_ENV=dev webpack-docker```

####  run the environment in ```production``` mode
```$ docker run --name my-webpack-docker -p 80:4000 webpack-docker```

#### To launch the app, you need to know the ip address of the virtual machine
Run the following in your terminal to get the machine's ip:

```$ docker-machine ip default```

Run the development container:

```docker run -e NODE_ENV=dev workflow-docker```

Evaluate the development container's envvariables.

On OSX/Linux:

```eval $(docker-machine env default)```

On Windows:
```docker-machine.exe env --shell cmd dev```
