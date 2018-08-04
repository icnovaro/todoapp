# Todo app

<!-- TOC -->

- [Todo app](#todo-app)
	- [1. About](#1-about)
	- [2. Run the application with docker compose](#2-run-the-application-with-docker-compose)
		- [2.1 Install Docker for your plataform](#21-install-docker-for-your-plataform)
		- [2.2 Install Docker-compose for your platafomr](#22-install-docker-compose-for-your-platafomr)
	- [3. Run the application](#3-run-the-application)

<!-- /TOC -->

## 1. About
 - A simple Todo App was did with [Reactjs](https://reactjs.org) and [Webpack](https://webpack.js.org) in frontend;
 - The backend was did with [Nodejs](https://nodejs.org), [ExpressJS](https://github.com/expressjs/express), [Node-restful](https://github.com/baugarten/node-restful) and [MongoDB](https://www.mongodb.com/);
 - [Docker](https://www.docker.com) to run all tiers (frontend, backend and database)

## 2. Run the application with docker compose
### 2.1 Install Docker for your plataform
 - [Install docker instructions](https://www.docker.com/community-edition)

### 2.2 Install Docker-compose for your platafomr
 - [Install docker-compose instructions](https://docs.docker.com/compose/)

## 3. Run the application

```bash
$ cd path/to/the/project/directory
```
 - Build and start all app layers (NongoDB, Bakckend API and Frontend) in back ground containers
```bash
$ docker-compose up -d --build
```
 - Open [http://localhost/](http://localhost/) in your browser
 
 - Stop all containers

```bash
$ docker-compose down
```