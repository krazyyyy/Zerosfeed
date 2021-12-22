from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField
from django.urls import reverse


# Create your models here.
class CustomUser(AbstractUser):
    pass

class Country(models.Model):
    country_name = models.CharField(max_length=64)
    country_flag = models.CharField(max_length=200, null=True, blank=True)
    country_code = models.CharField(max_length=6, null=True, blank=True)

class Feed(models.Model):
    website_url = models.CharField(max_length=228)
    source = models.CharField(max_length=228, null=True, blank=True)
    category = models.CharField(max_length=228, null=True, blank=True)
    country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name="country_feed", null=True, blank=True)

    def __str__(self):
        return f"{self.source}"



class PRVINews(models.Model):
    title = models.CharField(max_length=228)
    category = models.CharField(max_length=228, null=True, blank=True)
    img = models.CharField(max_length=228)
    pub_date = models.CharField(max_length=228, null=True, blank=True)
    source = models.CharField(max_length=228, null=True, blank=True)
    news_context = RichTextField()
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"

class ADsCode(models.Model):
    home_ad_side = models.TextField(null=True, blank=True,  help_text="Scroll Top Banner")
    
    hor_ad_one = models.TextField(null=True, blank=True,  help_text="Between Top and Biznis")
    hor_ad_two = models.TextField(null=True, blank=True, help_text="Between TEHNOLOGIJA and Sports")
    access_name = models.CharField(max_length=32, default="admin")


    def __str__(self):
        return "Banner AD Code"

class News(models.Model):
    title = models.CharField(max_length=228)
    link = models.CharField(max_length=228)
    # category = models.CharField(max_length=228, null=True, blank=True)
    img = models.CharField(max_length=228)
    pub_date = models.CharField(max_length=228, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    country = models.ForeignKey('Country', on_delete=models.CASCADE, related_name="news_country", null=True, blank=True)
    source = models.CharField(max_length=228, null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True)

    def get_absolute_url(self):
        return reverse('redirectPage', kwargs={'pk':self.id, 'name' : self.title.replace(" ", "-").replace("/", "-")})

class Categories(models.Model):
    category = models.CharField(max_length=228)
    news = models.ForeignKey(News, on_delete=models.CASCADE, related_name="news_category")


class footerHTML(models.Model):
    section_one = RichTextField(null=True, blank=True)
    section_two = RichTextField(null=True, blank=True)
    section_three = RichTextField(null=True, blank=True)
    access_name = models.CharField(max_length=128, default="admin")
    