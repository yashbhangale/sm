FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code and config files
COPY tsconfig.json ./
COPY src ./src
COPY .env* ./

# Create dist directory
RUN mkdir -p dist

# Build TypeScript code
RUN npm run build

# Ensure server.js exists with verbose output
RUN ls -la dist/ && echo "Build completed!"

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["node", "dist/server.js"] 