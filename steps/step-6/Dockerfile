FROM node:5.9.0

WORKDIR /tmp
ADD package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install -q --production

WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN npm run build

ENV NODE_ENV=
ENV PORT=

CMD [ "/usr/local/bin/npm", "start" ]

EXPOSE
