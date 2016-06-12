# Frontend Automation
Workshop on Front-end Development Automation


# To build docker container
$ docker build -t workflow-docker .

# To run in development development
$ docker run --name my-webpack-docker -p 80:4000 -e NODE_ENV=dev webpack-docker

# For deployment
$ docker run --name my-webpack-docker -p 80:4000 webpack-docker

# To view the application, you need to know the ip address of your virtual machine
$ docker-machine ip default

docker run -e NODE_ENV=dev workflow-docker

eval $(docker-machine env default)
