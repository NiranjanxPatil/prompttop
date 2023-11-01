FROM node:18

WORKDIR /app

COPY . /app

RUN npm install --production
RUN npm run build

CMD ["npm", "run"]
