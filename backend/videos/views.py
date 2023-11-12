import requests
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


def get_user_videos(user, cursor="0"):
    url = "https://tiktok-video-feature-summary.p.rapidapi.com/user/posts"
    headers = {
        "X-RapidAPI-Key": "fe1c5b412fmshfe27953d8668e94p163898jsne4bfad388baf",
        "X-RapidAPI-Host": "tiktok-video-feature-summary.p.rapidapi.com"
    }
    videos = []
    hasMore = True

    params = {"unique_id": user, "count": "35", "cursor": cursor}
    response = requests.get(url, headers=headers, params=params)
    json = response.json()

    videos += json["data"]["videos"]

    hasMore = json["data"]["hasMore"]
    cursor = json["data"]["cursor"]

    return videos, hasMore, cursor


@csrf_exempt
def get_videos(request):
    videos, hasMore, cursor = get_user_videos(
        "kristel99999", request.GET["cursor"])
    return JsonResponse({"data": {"videos": videos, "hasMore": hasMore, "cursor": cursor}})
