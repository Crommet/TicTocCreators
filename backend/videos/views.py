from functools import cmp_to_key
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


@csrf_exempt
def get_recommendations(request):
    users = ["thunder_keck", "smart.easy",
             "playmortalrite", "coding_nomad", "jacobrosstech"]

    recs = []
    for user in users:
        videos, hasMore, cursor = get_user_videos(user, "0")
        sorted_videos = sorted(videos, key=cmp_to_key(
            lambda a, b: b["play_count"] - a["play_count"]))

        if len(sorted_videos) >= 3:
            recs += sorted_videos[0:2]
        elif len(sorted_videos) >= 2:
            recs += sorted_videos[0:1]
        elif len(sorted_videos) >= 1:
            recs.append(sorted_videos[0])

    recs = sorted(recs, key=cmp_to_key(
        lambda a, b: b["play_count"] - a["play_count"]))

    return JsonResponse({"data": {"recs": recs}}, safe=False)
