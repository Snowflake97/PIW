from django.urls import path, include
from . import views

app_name = "lab4"

urlpatterns = [
    path('queue/', views.queue, name="queue"),

]
