from rest_framework import viewsets, permissions
from .models import Project, Technology, About
from .serializers import ProjectSerializer, TechnologySerializer, AboutSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = ProjectSerializer

class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = TechnologySerializer

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    permission_classes = [permissions.IsAdminUser]
    serializer_class = AboutSerializer