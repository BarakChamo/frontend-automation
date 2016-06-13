# Front-End Automation
Workshop on Front-End Development Automation with Webpack and Docker.

This is the excercise and demo repo for the Front-End Automation talk and workshop.
It provides the steps for setting up a basic, isolted automated development enviroment
power by Webpack and contained inside a Docker container.

## Following the workshop

#### Clone the repo's initial branch

`git clone https://github.com/BarakChamo/frontend-automation.git`

#### Follow workshop instructions

Step-by-step instructions to setting up the development environment are available in README files in the `steps` folder of the repository. 

#### Complete solutions for each step

Each step branch poses a small challenge in configuring webpack and automating front-end development. If you want to see the full and *'solved'* configuration look at the code for each step in the `master` branch of this repository.

## Running the complete development environment

#### Building the docker container
From the project folder, run:

```$ docker build -t workflow-docker .```

<br />
#### To run the environment in ```development``` mode
```$ docker run --name my-webpack-docker -p 80:4000 -e NODE_ENV=dev webpack-docker```

<br />
####  run the environment in ```production``` mode
```$ docker run --name my-webpack-docker -p 80:4000 webpack-docker```

<br />
#### To launch the app, you need to know the ip address of the virtual machine
##### Run the following in your terminal to get the machine's ip:

```$ docker-machine ip default```

<br />
##### Run the development container:

```docker run -e NODE_ENV=dev workflow-docker```

<br />
##### Evaluate the development container's envvariables.

On OSX/Linux:

```eval $(docker-machine env default)```

On Windows:

```docker-machine.exe env --shell cmd dev```
