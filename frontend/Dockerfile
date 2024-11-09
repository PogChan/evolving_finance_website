# Dockerfile for Frontend (Next.js)

# Step 1: Build Stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Step 2: Production Stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
EXPOSE 3010
CMD ["yarn", "start", "-p", "3010"]
