FROM node:22-alpine AS build

WORKDIR /app

COPY Front/package.json Front/package-lock.json ./
RUN npm ci

COPY Front/ .
RUN npx vite build

FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
