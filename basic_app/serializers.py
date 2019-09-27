from rest_framework import serializers 
from .models import Question, Answer, Comment, Profile
from django.contrib.auth import get_user_model 

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question 
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer 
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment 
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile 
        fields = '__all__'
    
class CreateUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=20)
    password = serializers.CharField(write_only=True, 
                                     style={'input_type':'password'})

    class Meta:
        model = get_user_model()
        fields = ('username', 'password', 'email')
        read_only_fields = ('is_staff', 'is_superuser', 'is_active',)
        write_only_fields = ('password')

    def create(self, validated_data):
        user = super(CreateUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save() 
        return user 


