from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests

comments = {
    "url":  "https://tiktok-video-feature-summary.p.rapidapi.com/comment/list",
    "params": lambda id, count, cursor: {"url": f"https://www.tiktok.com/@kristel99999/video/{id}", "count": count, "cursor": cursor},
    "headers": {
        "X-RapidAPI-Key": "fe1c5b412fmshfe27953d8668e94p163898jsne4bfad388baf",
        "X-RapidAPI-Host": "tiktok-video-feature-summary.p.rapidapi.com"
    }
}


@csrf_exempt
def analyze_video(request):
    hasMore = True
    cursor = "0"

    video_comments = []

    while hasMore:
        response = requests.get(comments["url"], headers=comments["headers"],
                                params=comments["params"]("7192689619585010950", 50, cursor))
        response = response.json()

        video_comments += response["data"]["comments"]

        cursor = response["data"]["cursor"]
        hasMore = response["data"]["hasMore"]

    comment_block = ""

    for comment in video_comments:
        comment_block += comment["text"]

    url = "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/"

    payload = {"text": comment_block}
    headers = {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "fe1c5b412fmshfe27953d8668e94p163898jsne4bfad388baf",
        "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com"
    }

    response = requests.post(url, data=payload, headers=headers)

    return JsonResponse(response.json()["emotions_normalized"], safe=False)
