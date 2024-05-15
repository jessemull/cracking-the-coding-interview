FROM node:14-alpine

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json .
COPY index.js .

RUN npm install

CMD ["npm", "start"]