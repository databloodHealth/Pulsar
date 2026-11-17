FROM node:22-alpine

WORKDIR /app

COPY back/package.json back/package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=node:node back/ .

ENV NODE_ENV=production PORT=3333
EXPOSE 3333

USER node

CMD ["npm", "start"]
