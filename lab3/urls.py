from django.urls import path, include
from . import views

app_name = "lab3"

urlpatterns = [
    path('canvas/', views.canvas, name="canvas"),
    path('snake/', views.snake, name="snake"),
    path('scores/', views.scores, name="scores"),

]
