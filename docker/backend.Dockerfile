FROM node:22-alpine

WORKDIR /app

COPY Back/package.json Back/package-lock.json ./
RUN npm ci --omit=dev

COPY Back/ .

ENV NODE_ENV=production
EXPOSE 3333

CMD ["node", "app.js"]
