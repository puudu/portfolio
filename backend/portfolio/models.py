from django.db import models

# Create your models here.
class Technology(models.Model):
    name = models.CharField(max_length=80)
    image = models.ImageField(null=True, upload_to='technology')
    position = models.PositiveIntegerField()
    hide = models.BooleanField()
    
    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        return "#"+ str(self.position) +" " + self.name
    
class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    screenshot = models.ImageField(null=False, upload_to='screenshots')
    technologies = models.ManyToManyField(Technology)
    url_github = models.URLField()
    url_deploy = models.URLField()
    url_playstore = models.URLField()
    position = models.PositiveIntegerField()
    hide = models.BooleanField()

    def delete(self, *args, **kwargs):
        self.screenshot.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        return "#"+ str(self.position) +" " + self.title

class About(models.Model):
    name = models.CharField(max_length=30)
    about_me = models.TextField()
    image = models.ImageField(null=False, upload_to='about')
    email = models.EmailField()
    url_github = models.URLField()
    url_linkedin = models.URLField()

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)