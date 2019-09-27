from django.urls import path 
from basic_app import views

urlpatterns = [
    path('question/', views.QuestionView.as_view({'get':'list', 'post':'create'}), name='question'),
    path('answer/', views.AnswerView.as_view(), name='answer'),
    path('comment/', views.CommentView.as_view(), name='comment'),
    path('profile/<str:name>', views.ProfileView.as_view(), name='profile'),
    path('answers/<int:pk>/', views.AnswerDetailView.as_view(), name='ans'),
    path('profile/<str:field>/', views.ProfileListView.as_view(), name='profileList'),
    path('profile/', views.ProfileNameView.as_view(), name='profileName'),

]