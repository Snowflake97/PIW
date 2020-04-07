from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "lab2/index.html", context=None)

def form(request):
    return render(request, "lab2/form.html", context=None)

def quadratic(request):
    return render(request, "lab2/quadratic.html", context=None)

def picture(request):
    return render(request, "lab2/picture.html", context=None)

def animals(request):
    return render(request, "lab2/animals.html", context=None)

def animation(request):
    return render(request, "lab2/animation.html", context=None)

def animation(request):
    return render(request, "lab2/animation.html", context=None)

def game(request):
    return render(request, "lab2/game.html", context=None)