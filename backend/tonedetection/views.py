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
    id = request.GET["id"]

    hasMore = True
    cursor = "0"

    video_comments = []

    while hasMore:
        params = comments["params"](id, 50, cursor)
        print(params)
        response = requests.get(
            comments["url"], headers=comments["headers"], params=params)
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

    emotions = response.json()["emotions_normalized"]
    emotions_sum = emotions["fear"] + emotions["sadness"] + emotions["joy"] + \
        emotions["disgust"] + emotions["anger"] + emotions["surprise"]

    if emotions_sum == 0:
        emotions_sum = 1
        emotions = {"joy": 1}

    emotions["other"] = 0
    deletes = []
    for key in emotions:
        emotions[key] = emotions[key] / emotions_sum
        if (emotions[key] < 0.1 and key != "other"):
            emotions["other"] += emotions[key]
            deletes.append(key)

    if emotions["other"] == 0:
        del emotions["other"]

    for key in deletes:
        del emotions[key]

    return JsonResponse(emotions, safe=False)
