# efiBackend/settings/production.py
from .base import *
import dj_database_url

DEBUG = False
ALLOWED_HOSTS = ['your-production-domain.com']
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")

DATABASES = {
    'default': dj_database_url.config(default=os.getenv('DATABASE_URL'))
}

STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'

SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
X_FRAME_OPTIONS = 'DENY'
