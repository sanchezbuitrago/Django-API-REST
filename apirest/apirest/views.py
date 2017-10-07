# -*- coding: utf-8 -*-
""" Maneja las operaciones de la pagina principal """

from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.db import connection

# Create your views here.
def inicio(request):
    """Lanza la pagina principal del aplicativo"""
    if request.method=='POST':
        try:
            cedula=request.POST.get('cedula')
            contrasena=request.POST.get('contrasena')
            cursor=connection.cursor()
            for c in cursor.execute("SELECT contrasena,tipousuario FROM Personas WHERE cedula='"+cedula+"'"):
                context={}
                context['contrasena']=c[0]
                context['tipousuario']=c[1]
            if context['contrasena']==contrasena:
                if context['tipousuario']==1:
                    print("retorna admin")
                    return render(request, 'indexadmin.html')
                else:
                    return render(request, 'indexusuario.html')
            else:
                return HttpResponseBadRequest('Bad Request')
        except:
            return HttpResponseBadRequest('Bad Request')
    else:
        return HttpResponseBadRequest('No Post Method')

def login(request):
    return render(request,'login.html')