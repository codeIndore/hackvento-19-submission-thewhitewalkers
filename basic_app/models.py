from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class Question(models.Model):
    author_Q = models.CharField(max_length=20)
    question = models.CharField(max_length=120)
    published_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.question 

class Answer(models.Model):
    author_A = models.CharField(max_length=20)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.TextField()
    upvote = models.IntegerField(default=0)

    def __str__(self):
        return self.answer 


class Comment(models.Model):
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    comment = models.CharField(max_length=100)

    def __str__(self):
        return self.comment

class Profile(models.Model):
    name = models.CharField(max_length=25, default='')
    email = models.EmailField()
    field = models.CharField(max_length=50)
    year = models.CharField(max_length=20)
    branch = models.CharField(max_length=10)
    section = models.CharField(max_length=1)
    semester = models.CharField(max_length=4)
    aboutYou = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.name 



