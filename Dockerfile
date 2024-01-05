# Use the official Node.js LTS (Long Term Support) image
FROM node:lts-alpine as build-stage

# Set the working directory
WORKDIR /app

# Copy package files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for production
FROM node:lts-alpine as production-stage

# Set the working directory
WORKDIR /app

# Copy only necessary files from the build-stage
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/package*.json ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
