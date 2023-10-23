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

   headers = {
	    "X-RapidAPI-Key": "af72565aebmsh3bb3632f1bd0181p1b4916jsn03285cfb2249",
	    "X-RapidAPI-Host": "tiktok-video-feature-summary.p.rapidapi.com"
    }
   
   videos = []
   
   hasMore = True
   cursor = "0"
   
   while hasMore:
        params = {"unique_id": "kristel99999", "count": "35", "cursor": cursor}
        response = requests.get(url, headers=headers, params=params) 
        json = response.json()

        videos += json["data"]["videos"]

        hasMore = json["data"]["hasMore"]
        cursor = json["data"]["cursor"]

   return JsonResponse({"data": {"videos": videos}})