FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV CHOKIDAR_USEPOLLING=true

EXPOSE 8000

CMD ["npm", "run", "start"]