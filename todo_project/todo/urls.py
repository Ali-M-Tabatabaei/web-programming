from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', views.todo_list, name='todo_list'),
    path('add/', views.todo_add, name='todo_add'),
    path('edit/<int:pk>/', views.todo_edit, name='todo_edit'),
    path('delete/<int:pk>/', views.todo_delete, name='todo_delete'),
    path('login/', views.user_login, name='login'),
    path('register/', views.register, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]