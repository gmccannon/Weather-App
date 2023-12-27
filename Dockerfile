# Use an official Node.js runtime as a base image
FROM node:21-alpine3.18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Set npm registry to Cloudflare mirror
RUN npm config set registry https://registry.npmjs.cf

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Set environment variable for running in production
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]
