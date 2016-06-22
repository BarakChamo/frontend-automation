FROM node:5.9.0

WORKDIR /tmp
ADD package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install -q --production

WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN npm install -g webpack
RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080

CMD [ "/usr/local/bin/npm", "start" ]

EXPOSE 8080
