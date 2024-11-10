#!/bin/sh

# Wait for the database to be ready
while ! pg_isready -h db -p 5432 -U $POSTGRES_USER; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

# Run migrations
python manage.py migrate --noinput

# Conditionally start the appropriate server
if [ "$ENVIRONMENT" = "production" ]; then
  # Start Gunicorn for production
  exec gunicorn --bind 0.0.0.0:8000 efiBackend.wsgi:application
else
  # Start Django development server
  exec python manage.py runserver 0.0.0.0:8000
fi
