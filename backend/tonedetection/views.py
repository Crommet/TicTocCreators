from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests

def index(request):
    return HttpResponse("Hello, world.")

# Create your views here.

@csrf_exempt
def connection_test(request):
    return JsonResponse({"message": "Hellow Planet"})

@csrf_exempt
def get_videos(request):
   url = "https://tiktok-video-feature-summary.p.rapidapi.com/user/posts"

   querystring = {"unique_id":"kristel99999", "count":"10", "cursor":"0"}
   headers = {
	    "X-RapidAPI-Key": "",
	    "X-RapidAPI-Host": "tiktok-video-feature-summary.p.rapidapi.com"
    }
   
   response = requests.get(url, headers=headers, params=querystring)   
   return JsonResponse(response.json())