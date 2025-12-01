FROM node:22-alpine3.19
RUN corepack enable
RUN corepack prepare yarn@4.0.1 --activate
RUN yarn set version 4.0.1
RUN yarn -v
RUN yarn config set --home enableTelemetry 0