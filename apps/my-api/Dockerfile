FROM node:17-slim as turborepo
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=my-api --docker

FROM node:17-slim as runner
WORKDIR /app
RUN yarn global add turbo
COPY --from=turborepo /app/out/json/ .
COPY --from=turborepo /app/out/yarn.lock ./yarn.lock
RUN yarn install
COPY --from=turborepo /app/out/full/ .
RUN yarn turbo run build --filter=my-api
EXPOSE 3000
CMD ["yarn", "workspace", "my-api", "start"]