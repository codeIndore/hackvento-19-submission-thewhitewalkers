from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from basic_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('basic_app.urls')),
    path('auth/login/', obtain_auth_token, name='auth_user_login'),
    path('auth/register/',views.CreateUserAPIView.as_view(), name='auth_user_create'),
    path('auth/logout/', views.LogoutUserAPIView.as_view(), name='auth_user_logout'),
]
