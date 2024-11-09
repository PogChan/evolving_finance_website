# efiBackend/settings/development.py
from .base import *

DEBUG = True
ALLOWED_HOSTS = ['*']
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv("POSTGRES_DB", "dev_db"),
        'USER': os.getenv("POSTGRES_USER", "dev_user"),
        'PASSWORD': os.getenv("POSTGRES_PASSWORD", "password"),
        'HOST': 'db',
        'PORT': 5432,
    }
}
