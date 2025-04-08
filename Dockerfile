FROM node:20-slim
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
