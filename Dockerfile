FROM node:20-bullseye as builder
WORKDIR /usr/src/integraservicios-gw
RUN npm i

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
COPY --chown=node:node . .
RUN npm run build
RUN npm cache clean --force

USER node

FROM node:20-bullseye as production
ENV IS_WORKER false
COPY --chown=node:node --from=builder /usr/src/integraservicios-gw/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/integraservicios-gw/dist ./dist
USER node
CMD [ "node", "dist/main.js" ]