from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http import JsonResponse

from .models import Project, Technology, About
from .serializers import ProjectSerializer, TechnologySerializer, AboutSerializer

# Create your views here.

@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all().filter(hide=False).order_by("position")
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_technologies(request):
    technologies = Technology.objects.all().filter(hide=False).order_by("position")
    serializer = TechnologySerializer(technologies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_about(request):
    about = About.objects.get(pk=1)
    serializer = AboutSerializer(about, many=False)
    return Response(serializer.data)