FROM node:10-alpine

RUN mkdir -p /backend
WORKDIR /backend
COPY ./ .

RUN rm -r ./node_modules
RUN yarn install && yarn upgrade
CMD yarn start

EXPOSE 3000