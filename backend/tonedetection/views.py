from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return HttpResponse("Hello, world.")

# Create your views here.

@csrf_exempt
def  connection_test(request):
    return JsonResponse({"message": "Hellow Planet"})