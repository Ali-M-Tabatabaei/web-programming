from django.contrib.auth.models import User
from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField(null=True)
    done = models.BooleanField(default=False, null=True)
