FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x wait-for.sh

EXPOSE 3000

CMD ["sh", "./wait-for.sh"]
