#!/bin/bash
docker-machine start
eval $(docker-machine env default)
docker run -p 80:8080 -e NODE_ENV=development workflow-docker
open http://$(docker-machine ip default)
