from django.urls import path, include
from . import views

app_name = "lab1"

urlpatterns = [
    path('game/', views.game, name="game"),
    path('main/', views.main, name="main"),
    path('register/', views.register, name="register"),
    path('sign/', views.sign, name="sign"),

]
