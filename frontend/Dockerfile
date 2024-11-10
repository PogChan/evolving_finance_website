# Dockerfile for Frontend (Next.js)

# Step 1: Base Stage
FROM node:18-alpine AS base
WORKDIR /app

# Copy only package.json and yarn.lock to install dependencies first
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Step 2: Build Stage (conditionally build for production)
FROM base AS builder
RUN if [ "$NODE_ENV" = "production" ]; then yarn build; fi

# Step 3: Final Stage
FROM node:18-alpine
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the application port
EXPOSE 3010

# Use the appropriate start command based on NODE_ENV from docker-compose.yml
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then yarn start; else yarn dev; fi"]
