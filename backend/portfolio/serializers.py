from rest_framework import serializers
from .models import Project, Technology, About

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'
        
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'
        