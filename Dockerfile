# DOCKER-VERSION 1.0.1

MAINTAINER Chris Grimmett <chris@grimtech.net>

FROM phusion/baseimage:0.9.13

RUN apt-get update
RUN apt-get -y install nodejs nodejs-legacy npm git git-core

# add all the node app files to the /src dir of the container's filesystem
ADD . /src

RUN cd /src
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]