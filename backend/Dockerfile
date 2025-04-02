FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# instala netcat
RUN apt-get update && apt-get install -y netcat-openbsd

RUN chmod +x wait-for.sh

EXPOSE 3000
CMD ["sh", "./wait-for.sh"]
