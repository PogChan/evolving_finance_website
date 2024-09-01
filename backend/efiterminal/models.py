from django.db import models
from cloudinary.models import CloudinaryField
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from io import BytesIO
from PIL import Image
import requests
# Create your models here.

class Flow(models.Model):
    ticker=models.CharField(max_length=5)
    strike=models.IntegerField()
    expDate=models.DateField()
    openInterest = models.IntegerField()
    volume = models.IntegerField()
    price= models.FloatField()
    createdAt = models.DateTimeField(auto_now_add= True)
    modifiedAt = models.DateTimeField(auto_now =True)
    companyLogo = CloudinaryField('company', overwrite = True, format="jpg")

    class Meta:
        #This does descending order
        ordering=('-modifiedAt',)

    def __str__(self):
        return self.title()

    def save(self, *args, **kwargs):
        # Check if companyLogo is a URL or a file-like object
        if isinstance(self.companyLogo, str):
            logo_content = requests.get(self.companyLogo).content
        else:
            logo_content = self.companyLogo.read()

        logo_name = f"{self.ticker}Logo"

        upload_result = upload(logo_content, public_id=logo_name, overwrite=True, format="jpg")
        self.companyLogo = upload_result['public_id']

        super().save(*args, **kwargs)


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)

class User(AbstractBaseUser):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField()

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username
    class Meta:
        ordering=('-created_at',)
