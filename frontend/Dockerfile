# Dockerfile for Frontend (Next.js)

# Step 1: Base Stage - Install dependencies
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies first (use only package.json and yarn.lock for caching)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the application files
COPY . .

# RUN echo "Running with NODE_ENV=$NODE_ENV"

RUN if [ "$NODE_ENV" = "production" ]; then yarn build; fi

# Expose the application port
EXPOSE 3010

# Use a conditional start command based on NODE_ENV at runtime
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then yarn start; else yarn dev; fi"]
