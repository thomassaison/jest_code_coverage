FROM node:16 as builder

WORKDIR /app

COPY ./package.json .
COPY ./tsconfig.json .

COPY ./src ./src

RUN npm install
RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app

COPY ./package.json ./
COPY ./tsconfig.json ./

RUN npm install --mode=production
COPY --from=builder /app/build /app/build

CMD ["node", "/app/build/index.js"]