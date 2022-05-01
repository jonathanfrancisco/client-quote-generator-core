# TODO: Test & Production environment

# Local Development
FROM node:16.14.2-alpine

RUN npm install knex@1.0.7 -g

COPY ./ /home/app
WORKDIR /home/app
RUN yarn install

CMD ["yarn","start:dev-node-container"]