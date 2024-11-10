#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  echo "Running in production mode..."
  yarn build && yarn start
else
  echo "Running in development mode..."
  yarn dev
fi
