# Dockerfile for Backend (Django)

# Step 1: Use official Python image as a base
FROM python:3.13-slim

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Set environment variables for Django
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE=efiBackend.settings.development

# Collect ensure migrations
RUN python manage.py migrate --noinput

# Expose the port for the web server
EXPOSE 8000

# Command to run Gunicorn (use in production)
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "mysite.wsgi:application"]
