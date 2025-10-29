# Step 1: Use official Node.js image as base
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files
COPY . .

# Step 6: Build the project
RUN npm run build

# Step 7: Install a lightweight HTTP server to serve the build
RUN npm install -g serve

# Step 8: Expose port 8080
EXPOSE 8080

# Step 9: Command to run the app
CMD ["serve", "-s", "dist", "-l", "8080"]
