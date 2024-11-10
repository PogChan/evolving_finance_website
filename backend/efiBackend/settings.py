import os
from pathlib import Path

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],  # You can specify template directories here if needed
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "fallback-secret-key")
print("Database name:", os.getenv('POSTGRES_DB'))

# Base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# Toggle between development and production based on an environment variable
ENVIRONMENT = os.getenv('ENVIRONMENT', 'development')

# Debug mode
DEBUG = ENVIRONMENT == 'development'

# Set allowed hosts for development vs production
ALLOWED_HOSTS = ['localhost'] if DEBUG else ['efiterminal.com']
ROOT_URLCONF = 'efiBackend.urls'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB', 'efiterminal'),
        'USER': os.getenv('POSTGRES_USER', 'pogchan'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD', '111844czy'),
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
