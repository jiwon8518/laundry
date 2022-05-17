FROM node:14

WORKDIR /laundry_backend/
COPY ./package.json /laundry_backend/
COPY ./yarn.lock /laundry_backend/
RUN yarn install

COPY . /laundry_backend/
RUN yarn build
CMD yarn start:dev