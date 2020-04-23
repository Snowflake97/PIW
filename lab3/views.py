from django.shortcuts import render


# Create your views here.

def canvas(request):
    return render(request, "lab3/canvas.html", context=None)


def snake(request):
    return render(request, "lab3/snake.html", context=None)


def scores(request):
    return render(request, "lab3/scores.html", context=None)
