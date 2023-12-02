# En app_notas/urls.py
from django.urls import path
from .views import pagina_principal, pagina_login, pagina_registro, pagina_ver, pagina_editar, pagina_borrar, crear_nota

urlpatterns = [
    path('', pagina_principal, name='pagina_inicio'),
    path('login/', pagina_login, name='pagina_login'),
    path('register/', pagina_registro, name='pagina_registro'),
    path('ver/', pagina_ver, name='pagina_ver'),
    path('editar/', pagina_editar, name='pagina_editar'),
    path('borrar/', pagina_borrar, name='pagina_borrar'),
    path('crear_nota/', crear_nota, name='crear_nota'),
]
