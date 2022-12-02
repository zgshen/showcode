FROM node:16 AS build
WORKDIR /app/frontend
COPY . .
RUN npm ci
RUN npm run build

FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/frontend/build .
