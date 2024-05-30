# MultiContainer-Docker-App

MultiContainer Docker App with network communications

All the Docker Commands

Build the image
docker build -t .

Run the image along with port mapping
docker run --name -p 3000:3000

List all running containers
docker ps

List all images
docker images

Stop/kill the container
docker stop/kill

removes the container
docker rm

Syncs the local project with the container/ Bind Mount
docker run --name -p 3000:3000 -v currenth project base path:/user/src/app
Ex: docker run --name my-node-app-2 -p 5000:3000 -v C:\Users\saite\source\Docker_Demo:/user/src/app dockerdemoapp:v2

Syncs the local project with the container and excludes the node_modules
docker run --name -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/user/src/app

Access the container for windows
docker exec -it sh

Creates a build file from dev docker file for dev env
docker build -t dockerdemoapp:v3 -f Dockerfile.dev .

Crates a docker image and container for mongodb in a detached state and removes container on termination.
docker run --name mongodb -d --rm mongo

mongo container is mapped to 27017 port on local machine.
docker run -d --rm -p 27017:27017 mongo

provides all the deatils about the container
docker container inspect mongodb

Running an react image neeed -it interactive flag mandatory
docker run --name <container-name> -p 3000:3000 -it --rm <image-name>

//Creating network
docker network create todo-net

//Building images
docker build -t todoapp-frontend .  
docker build -t todoapp .

//running frontend/backend/db //using named volumes //binding ///port mapping
docker run --name mongodb --rm -p 27017:27017 -d --network todo-net -v data:data/db mongo
docker run --name todoapp-UI -it --rm -p 3000:3000 -d -v C:\Users\saite\source\MultiContainer-Docker-App\frontend\src:/app/src todoapp-frontend
docker run --name todoapp-backend --network todo-net -p 8000:8000 -v C:\Users\saite\source\MultiContainer-Docker-App\backend\src:/app/src todoapp

//Docker Networks
To check the network list
docker network ls

To create a docker network
docker network create <network-name>
