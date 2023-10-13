from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("test/", views.connection_test, name="test"),
    path("getvideos/", views.get_videos, name="getvideos")
]
