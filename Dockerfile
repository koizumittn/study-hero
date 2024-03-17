FROM node:18-alpine AS base

# Set environment varialbes for Google Cloud
# ENV GOOGLE_CLOUD_PROJECT ${GOOGLE_CLOUD_PROJECT}

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
