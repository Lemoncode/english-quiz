FROM node:12-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Prepare static files
FROM base AS build-front
COPY ./ ./
RUN npm install
RUN npm run build

# Release
FROM base AS release
ENV STATIC_FILES_PATH=./public
ENV NODE_ENV=production
COPY --from=build-front /usr/app/dist $STATIC_FILES_PATH
COPY ./server/package.json ./
COPY ./server/index.js ./
COPY ./server/redirect-https.middleware.js ./
RUN npm install --only=production

ENTRYPOINT [ "node", "index" ]
