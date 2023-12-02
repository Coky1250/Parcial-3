from django.shortcuts import render, redirect  
from django.http import HttpResponse
from .models import Nota
from .forms import NotaForm

def crear_nota(request):
    if request.method == 'POST':
        form = NotaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pagina_inicio')  
    else:
        form = NotaForm()

    return render(request, 'crear_nota.html', {'form': form})

def pagina_principal(request):
    notas = Nota.objects.all().order_by('-fecha')
    return render(request, 'base.html', {'notas': notas})

def pagina_login(request):
    return render(request, 'login.html')

def pagina_registro(request):
    return render(request, 'register.html')

def pagina_ver(request):
    notas = Nota.objects.all().order_by('-fecha')
    return render(request, 'Ver.html', {'notas': notas})

def pagina_editar(request):
    return render(request, 'Editar.html')

def pagina_borrar(request):
    return render(request, 'Borrar.html')
