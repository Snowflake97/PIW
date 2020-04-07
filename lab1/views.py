from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "index.html", context=None)

def main(request):
    return render(request, "lab1/main.html", context=None)

def game(request):
    return render(request, "lab1/game.html", context=None)

def register(request):
    return render(request, "lab1/register.html", context=None)

def sign(request):
    return render(request, "lab1/sign.html", context=None)