# Use the latest node version as a parent image
FROM node:latest

# Set environment variables
ARG REACT_APP_API_KEY
ARG REACT_APP_AUTH_DOMAIN
ARG REACT_APP_DATABASE_URL
ARG REACT_APP_PROJECT_ID
ARG REACT_APP_STORAGE_BUCKET
ARG REACT_APP_MESSAGING_SENDER_ID
ARG REACT_APP_APP_ID


# Copy the current directory contents into the container at /opt/react
COPY . /opt/react

# Set the working directory to /opt/react
WORKDIR /opt/react

# Install any needed packages specified in package.json
RUN npm install

# Run the app when the container launches
CMD npm start
