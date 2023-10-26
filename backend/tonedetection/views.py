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

def get_user_videos(user):
    url = "https://tiktok-video-feature-summary.p.rapidapi.com/user/posts"
    headers = {
	    "X-RapidAPI-Key": "1dcfb7db2emsh50b921e1a493db9p148ee0jsn89fbae24ecea",
	    "X-RapidAPI-Host": "tiktok-video-feature-summary.p.rapidapi.com"
    }
    videos = []
    hasMore = True
    cursor = "0"

    while hasMore:
        params = {"unique_id": user, "count": "35", "cursor": cursor}
        response = requests.get(url, headers=headers, params=params) 
        json = response.json()

        videos += json["data"]["videos"]

        hasMore = json["data"]["hasMore"]
        cursor = json["data"]["cursor"]
        
    return videos


@csrf_exempt
def get_videos(request):
   return JsonResponse({"data": {"videos": get_user_videos("kristel99999")}})