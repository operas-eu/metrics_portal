FROM node:latest

WORKDIR /usr/src/app/

COPY package.json ./
RUN npm install --silent --no-cache

COPY ./ ./

RUN npm run lint

CMD ["npm", "run", "build"]
