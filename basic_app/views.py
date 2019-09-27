from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, ListAPIView, CreateAPIView
from basic_app.models import Question, Answer, Comment, Profile
from .serializers import QuestionSerializer, CommentSerializer, AnswerSerializer, CreateUserSerializer, ProfileSerializer
from rest_framework import status 
from rest_framework.response import Response 
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView 
from rest_framework import viewsets
from rest_framework import serializers


# Create your views here.


class QuestionView(viewsets.ViewSet):
    permission_classes = [AllowAny]
    def list(self, request):
        queryset = Question.objects.all()
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        question = request.data.get('question')
        author = request.data.get('author_Q')
        Question.objects.create(question=question, author_Q=author)
        return Response(status.HTTP_201_CREATED)

class AnswerView(ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Answer.objects.filter()
    serializer_class = AnswerSerializer

class CommentView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
class AnswerDetailView(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer 

    def get_queryset(self):
        pkv = self.kwargs.get('pk')
        return Answer.objects.filter(question=pkv)

    def post(self, request, pk):
        answer = request.data.get('answer')
        authorA = request.data.get('authorA')
        question = Question.objects.filter(pk=pk)
        for q in question:
            ques = q
        Answer.objects.create(author_A=authorA, answer=answer, question=q)
        return Response(status.HTTP_201_CREATED)


class CreateUserAPIView(CreateAPIView):
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        # Creating a token on registering  for future auth.
        token = Token.objects.create(user=serializer.instance)
        token_data = {"token" : token.key}
        return Response(
            {**serializer.data, **token_data},
            status = status.HTTP_201_CREATED,
            headers = headers
        )

class LogoutUserAPIView(APIView):
    queryset = get_user_model().objects.all()

    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)  

class ProfileView(ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def post(self, request):
        name = request.data.get('name')
        branch = request.data.get('branch')
        section = request.data.get('section')
        year = request.data.get('year')
        semester = request.data.get('semester')
        email = request.data.get('email')

        Profile.objects.create(name=name, branch=branch, section=section, year=year, semester=semester, email=email)

        return Response(status.HTTP_201_CREATED)

    def get(self, request, *args, **kwargs):
        name = self.kwargs['name']
        serializer = ProfileSerializer(Profile.objects.filter(name=name),many=True)
        return Response(serializer.data)

class ProfileListView(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self, *args, **kwargs):
        field = self.kwargs['field']
        print(Profile.objects.filter(field=field))
        return Profile.objects.filter(field=field)

class ProfileNameView(ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Profile.objects.all() 
    serializer_class = ProfileSerializer

    def post(self, request):
        name = request.data.get('name')
        branch = request.data.get('branch')
        section = request.data.get('section')
        year = request.data.get('year')
        semester = request.data.get('semester')
        email = request.data.get('email')
        aboutYou = request.data.get('aboutYou')
        field = request.data.get('field')
        print(name)
        print(branch)
        print(section)
        print(year)
        print(semester)
        print(field)
        print(aboutYou)


        Profile.objects.create(name=name,field=field,aboutYou=aboutYou, branch=branch, section=section, year=year, semester=semester, email=email)
        return Response(status.HTTP_201_CREATED)
       



