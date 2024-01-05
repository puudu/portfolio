from django.urls import path
from . import views

urlpatterns = [
    path('api/get-projects/', view=views.get_projects),
    path('api/get-technologies/', view=views.get_technologies),
    path('api/get-about/', view=views.get_about),
]
