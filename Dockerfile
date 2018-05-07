FROM node:8-alpine

RUN mkdir -p /backend
WORKDIR /backend
COPY ./ .

RUN yarn install

EXPOSE 3000