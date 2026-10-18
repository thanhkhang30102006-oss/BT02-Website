# Build React
FROM node:20-alpine AS build-stage
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Build node.js server
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY server.js ./

COPY --from=build-stage /app/client/dist ./public

EXPOSE 3000
CMD ["node", "server.js"]
