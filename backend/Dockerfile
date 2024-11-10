# Dockerfile for Backend (Django)

# Step 1: Use official Python image as a base
FROM python:3.13-slim

RUN apt-get update && \
    apt-get install -y curl postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Set environment variables for Django
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=efiBackend.settings

COPY migrate.sh /migrate.sh
RUN chmod +x /migrate.sh
# Expose the port for the web server
EXPOSE 8000

# Define a default command that checks the environment
CMD ["/migrate.sh"]
