import os
from pathlib import Path

print("Database name:", os.getenv('POSTGRES_DB'))
# Base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# Toggle between development and production based on an environment variable
ENVIRONMENT = os.getenv('ENVIRONMENT', 'development')

# Debug mode
DEBUG = ENVIRONMENT == 'development'

# Set allowed hosts for development vs production
ALLOWED_HOSTS = ['localhost'] if DEBUG else ['efiterminal.com']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB'),
        'USER': os.getenv('POSTGRES_USER'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD'),
        'HOST': 'db',
        'PORT': '5432',
    }
}

# Static and media files
STATIC_URL = '/static/'
MEDIA_URL = '/media/'

# Configure logging to be more verbose in development
if DEBUG:
    LOGGING = {
        'version': 1,
        'disable_existing_loggers': False,
        'handlers': {
            'console': {
                'class': 'logging.StreamHandler',
            },
        },
        'root': {
            'handlers': ['console'],
            'level': 'DEBUG',
        },
    }
else:
    # Production logging (adjust as needed)
    LOGGING = {
        'version': 1,
        'disable_existing_loggers': False,
        'handlers': {
            'file': {
                'level': 'ERROR',
                'class': 'logging.FileHandler',
                'filename': '/var/log/django/error.log',
            },
        },
        'loggers': {
            'django': {
                'handlers': ['file'],
                'level': 'ERROR',
                'propagate': True,
            },
        },
    }
