from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from .models import Todo
from .forms import TodoForm, UserRegisterForm
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate, login


@login_required
def todo_list(request):
    todos = Todo.objects.filter(user=request.user)
    return render(request, 'todo_list.html', {'todos': todos})


@login_required
def todo_add(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            todo = form.save(commit=False)
            todo.user = request.user
            todo.save()
            return redirect('todo_list')
    else:
        form = TodoForm()
    return render(request, 'todo/todo_add.html', {'form': form})


@login_required
def todo_edit(request, pk):
    todo = get_object_or_404(Todo, pk=pk, user=request.user)
    if request.method == 'POST':
        form = TodoForm(request.POST, instance=todo)
        if form.is_valid():
            form.save()
            return redirect('todo_list')
    else:
        form = TodoForm(instance=todo)
    return render(request, 'todo/todo_edit.html', {'form': form, 'todo': todo})


@login_required
def todo_delete(request, pk):
    todo = get_object_or_404(Todo, pk=pk, user=request.user)
    todo.delete()
    return redirect('todo_list')


def register(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('todo_list')
    else:
        form = UserRegisterForm()
    return render(request, 'registration.html', {'form': form})


def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('todo_list')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})
