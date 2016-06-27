FROM eddywashere/alpine-node-sass:latest

WORKDIR /src
ADD . .

RUN apk add --no-cache build-base python \
 && npm install \
 && npm run build \
 && apk del build-base python

EXPOSE 8080

CMD [ "npm", "start" ]