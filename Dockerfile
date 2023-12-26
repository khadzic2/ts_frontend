FROM node
WORKDIR /frontend
COPY ./package.json /frontend
RUN npm install --legacy-peer-deps --save
COPY . .
CMD [ "npm", "run", "start" ]