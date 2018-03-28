FROM node:8.10

RUN apt-get update -qq -y
RUN apt-get install -qq unar

RUN mkdir /app
WORKDIR /app

COPY . .

RUN unar 38550_PLU_20100625.7z

CMD ["node", "index.js"]
