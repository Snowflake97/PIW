from django.urls import path, include
from . import views

app_name = "lab2"

urlpatterns = [
    path('form/', views.form, name="form"),
    path('quadratic/', views.quadratic, name="quadratic"),
    path('picture/', views.picture, name="picture"),
    path('animals/', views.animals, name="animals"),
    path('animation/', views.animation, name="animation"),
    path('game/', views.game, name="game"),

]
