from django.db import models
from django.contrib.auth.models import User

class Nota(models.Model):
    titulo = models.CharField(max_length=30)
    nota = models.CharField(max_length=200)
    fecha = models.DateField(auto_now_add=True)  # La fecha se establecerá automáticamente al crear la nota
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)  # Relacionar la nota con el usuario que la crea

    def __str__(self):
        return self.titulo
