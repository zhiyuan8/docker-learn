[Intro to K8s](https://medium.com/google-cloud/introduction-to-docker-and-kubernetes-on-gcp-with-hands-on-configuration-part-3-kubernetes-with-eb41f5fc18ae)  

# Kubernetes (K8s)
To scale up application.  

- Kubernetes is a container orchestrator which makes servers act like as one. Actually, it is nothing but just a set of APIs which run on top of Docker.  
- Kubernetes cluster: Kubernetes coordinates a highly available cluster of computers that are connected to work as a single unit
- Master: Coordinates the cluster
- Node: Single server in the Kubernetes cluster, as a worker to run applications
- Kubectl: Command line to configure and manage Kubernetes
- Pod: Pod is the basic execution unit of a Kubernetes application–the smallest and simplest unit in the Kubernetes object model that you create or deploy.
- Controller: Create and update pods and other objects.
- Volumes: A volume is just a directory, possibly with some data in it, which is accessible to the Containers in a Pod.
- Service: Network endpoint which is used to connect to a pod. There are 3 popular types. Of couse, there are some other types like ingress. But we will not discuss here.
- ClusterIP — only work within cluser, internal IP is allocated.
- NodePort — port is usually high and open on every IP of node.
- LoadBalancer — only available if provider has Loadbalancer. It controls a loadbalancer endpoint external to the cluster.

## Definition
Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.

## Advantage
