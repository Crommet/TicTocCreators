from django.urls import path

from . import views

urlpatterns = [
    path("getvideos/", views.get_videos, name="getvideos"),
    path("getrecs/", views.get_recommendations, name="getrecs")
]
