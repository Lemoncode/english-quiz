FROM node:16-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Prepare static files
FROM base AS build-front
COPY ./ ./
RUN npm ci
RUN npm run build

# Release
FROM base AS release
ENV STATIC_FILES_PATH=./public
ENV NODE_ENV=production
COPY --from=build-front /usr/app/dist $STATIC_FILES_PATH
COPY ./server/package.json ./
COPY ./server/index.js ./
RUN npm install --only=production

FROM nasdan/azure-pm2-nginx
ENV NODE_ENV=production
ENV STATIC_FILES_PATH=./public
COPY --from=release /usr/app ./

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV INTERNAL_PORT=3000
RUN sed -i -e 's|INTERNAL_PORT|'"$INTERNAL_PORT"'|g' /etc/nginx/conf.d/default.conf

CMD sh docker-entrypoint.sh && \
  sed -i -e 's|PORT|80|g' /etc/nginx/conf.d/default.conf && \
  pm2 start ./index.js --name "app" --env production && \
  nginx -g 'daemon off;'

