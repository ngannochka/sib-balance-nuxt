# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.3.4-alpine AS build
WORKDIR /app

COPY package.json bun.lock* ./

# use ignore-scripts to avoid building node modules like better-sqlite3 --ignore-scripts
RUN bun install --frozen-lockfile

# Copy the entire project
COPY . .

RUN bun --bun run build

# copy production dependencies and source code into final image
FROM node:24.11.1-alpine3.23
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
