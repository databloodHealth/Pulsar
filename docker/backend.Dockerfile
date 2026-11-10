FROM node:22-alpine

WORKDIR /app

COPY Back/package.json Back/package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=node:node Back/ .

ENV NODE_ENV=production PORT=3333
EXPOSE 3333

USER node

CMD ["npm", "start"]
