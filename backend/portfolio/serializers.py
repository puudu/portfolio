from rest_framework import serializers
from .models import Project, Technology, About

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'
        
class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['technologies'] = [tech['name'] for tech in representation['technologies']]
        return representation

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'
        