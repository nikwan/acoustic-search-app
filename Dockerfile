# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14-alpine as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY ./ /app/

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17
#Copy dist
COPY --from=build-stage /app/dist/demandtech-search/ /usr/share/nginx/html
#Copy default nginx configuration
#COPY ./nginx-custom.conf /etc/nginx/conf.d/default.confd