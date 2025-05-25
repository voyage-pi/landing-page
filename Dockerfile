FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --include=dev

COPY . .

CMD ["npm", "run", "dev"] 