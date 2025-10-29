## Flavaro Food Order (Dockerized)

A frontend food ordering app built with **Vite + React + Redux** — containerized using Docker for easy deployment.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Docker NodeJS Link](https://hub.docker.com/_/node)
- Internet connection (to pull the Node.js base image)

---

## Dockerfile Explanation

Below is the Dockerfile used to build and run this app:

```Dockerfile
# Step 1: Use official lightweight Node.js image
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the app source code
COPY . .

# Step 5: Build the project for production
RUN npm run build

# Step 6: Install a lightweight HTTP server
RUN npm install -g serve

# Step 7: Expose port 8080 (the app will run here)
EXPOSE 8080

# Step 8: Serve the production build
CMD ["serve", "-s", "dist", "-l", "8080"]
```
## Build and Run with Docker
Step 1: Build the Docker image
Run this command from your project root (where the Dockerfile is):

bash
Copy code
```
docker build -t flavoro-frontend .
```
flavoro-frontend is the image name — you can change it if you want.

Step 2: Run the container
bash
Copy code
```
docker run -d -p 8080:8080 --name flavoro-container flavoro-frontend
```
-d → Run in detached mode

-p 8080:8080 → Map container’s port 8080 to your system’s port 8080

--name → Gives the container a custom name

Step 3: Open the app
Visit
```
http://localhost:8080
```
in your browser.

## Useful Commands
Stop the container:

bash
Copy code
```
docker stop flavoro-container
```
Start it again:

bash
Copy code
```
docker start flavoro-container
```
View logs:

bash
Copy code
```
docker logs flavoro-container
```
Remove container:

bash
Copy code
```
docker rm flavoro-container
```
Remove image:

bash
Copy code
```
docker rmi flavoro-frontend
```
## How It Works
<h3>
Docker pulls a Node.js base image
  <br>
Installs dependencies (npm install)
  <br>
Builds your Vite project (npm run build)
  <br>
Uses a tiny Node server (serve) to host your static files
</h3>


