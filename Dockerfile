FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./
COPY package*.json ./

RUN npm install express
RUN npm install http-proxy

# Bundle app source
RUN mkdir www
RUN mkdir apiserver
COPY ./www ./www
COPY ./apiserver ./apiserver
COPY ./nserv.js ./

EXPOSE 8888
# EXPOSE 8888 8080
CMD [ "node", "nserv.js" ]
