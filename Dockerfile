FROM node:16-alpine

WORKDIR /

COPY package*.json ./

RUN npm install
ENV DB_PORT = 3306
ENV DATABASE = newspaper
ENV USER_NAME = root
ENV HOST = 127.0.0.1
ENV DIALECT = mysql
ENV AUTH_PORT = 5500
ENV SV_PORT = 5000

COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]