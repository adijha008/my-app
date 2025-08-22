FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Fix permissions for all binaries inside node_modules/.bin
RUN chmod -R 755 node_modules/.bin

RUN npm run build

EXPOSE 3000

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
