# Docker & K8s
[Docker official tutorial on AWS](https://docker-curriculum.com/)  
[Docker 101](https://www.docker.com/101-tutorial/)  
[Introduction to Docker and Kubernetes on GCP with Hands-on Configuration ](https://medium.com/google-cloud/introduction-to-docker-and-kubernets-on-gcp-with-hands-on-configuration-part-1-docker-3d9709ee9f6a)  

# Terminology
- Docker : an open-source project that automates the deployment of software applications inside containers by providing an additional layer of abstraction and automation of OS-level virtualization on Linux.  
    - build an application faster.
    - Dockerfile

- Docker compose : When we use Docker Compose, it just needs a docker-compose.yaml file instead of Dockerfile.  
    - build complicated application faster, some complicated application which contains Web Server, Application Server and Database.
    - docker-compose.yml

- Kubernetes (K8s)
  - Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.
  - A set of APIs which run on top of Docker.

- Docker Swarm

- Docker image

- Docker network

- Docker volume

- Nginx

- devops

- WordPress : a free and open-source content management system written in hypertext preprocessor language and paired with a MySQL or MariaDB database with supported HTTPS.  

# Advantages
Docker:
1. update dockerfile to keep original production app working, while deploying new app version in another port.

Docker compose:
1. 

# Usage
## prepare Dockerfile
1. pull docker image with specified version
2. set work directory in the container
3. copy current directory into container
4. open port
5. run node command to kick start
```
FROM node:13.12
WORKDIR /app
ADD . /app
EXPOSE 9000
CMD ["node", "app.js"]
```

## run docker to build application
The command flag -t means to name and tag an image i.e. name:tag. By default, the tag will be “latest” if we don’t specify a tag.  
```
docker build -t node-app:1.0 .
```
Show all existing images
```
docker images
```
Run a docker image.  
Noted: Container port and application port: 5000 Server port: 8080 . --name flag gives a name to the container.  
```
docker run -p 5000:8080 --name app-demo node-app:1.0
```
And observe:  
*Server running at http://127.0.0.1:8080/*  
In another terminal, run
```
curl localhost:5000
```
And observe:  
*Hello World*

## enter & exit docker
Enter the container we created.
```
docker ps // print container id
docker exec -it [container_id] bash // then enter container code
```
Clean up all containers
```
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
```

## docker compose
The docker-compose.yaml file will contain the information about the containers, networks and volumes.  
Run docker-compose.yaml file:   
```
sudo docker-compose up -d
```
