FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY ./src ./src

COPY ./videos ./videos

CMD npm start