# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse, QueryDict
from django.db import connection
import json
# Create your views here.
def inicioproductos(request):
    """metodo que lanza la pagina principal"""

    return render(request, 'productos.html')

def getproducto(request):
    print "Entra al Backend POST::::::::::::::::::::."
    if request.method == 'GET':
        try:
            print "Entra al Backend POST::::::::::::::::::::."
            cursor = connection.cursor()
            listcontext = []

            for c in cursor.execute("SELECT * FROM Productos"):
                context = {}
                context['idproducto'] = c[0]
                context['nombre'] = c[1]
                context['precio'] = c[2]
                context['existentes'] = c[3]
                listcontext.append(context)
        except:
            return HttpResponseBadRequest('Bad Request')
        return JsonResponse(listcontext, safe=False)
    else:
        return HttpResponseBadRequest("NO GET METHOD")


def buscarproducto(request):
    if request.method == 'GET':
        try:
            cursor=connection.cursor()
            listcontext=[]
            idproducto=request.GET.get('idproducto')
            for c in cursor.execute("SELECT * FROM Productos WHERE idproducto="+idproducto):
                context={}
                context['idproducto']=c[0]
                context['nombre']=c[1]
                context['precio']=c[2]
                context['existentes']=c[3]
                listcontext.append(context)
        except:
            return HttpResponseBadRequest('Bad Request')
        return JsonResponse(listcontext,safe=False)
    else:
        return HttpResponseBadRequest("NO GET METHOD")

def actualizarproducto(request):
    if request.method=='PUT':
        print("Backend PUT :::::::::::::::::")
        try:
            put=QueryDict(request.body)

            idproducto=put.get('idproducto')
            nombre=put.get('nombre')
            precio=put.get('precio')
            existentes=put.get('existentes')
            print(idproducto)
            print(nombre)
            print(precio)
            print(existentes)
            cursor=connection.cursor()
            cursor.execute("UPDATE Productos SET nombre='"+nombre+"',precio="+precio+",existentes="+existentes+" WHERE idproducto="+idproducto+";")
            return HttpResponse("OK")
        except:
            return HttpResponseBadRequest("Bad Request")
    else:
        return HttpResponseBadRequest("No PUT Method")

def ingresarproducto(request):
    if request.method=='POST':
        try:
            nombre = request.POST.get('nombre')
            precio=request.POST.get('precio')
            existentes=request.POST.get('existentes')
            cursor=connection.cursor()
            cursor.execute("INSERT INTO Productos(nombre,precio,existentes) VALUES('"+nombre+"',"+precio+","+existentes+")")
            return HttpResponse('OK')
        except:
            HttpResponseBadRequest('Bad Request')
    else:
        HttpResponseBadRequest('No POST Method')

def eliminarproducto(request):
    if request.method=='DELETE':
        try:
            print('Backend DELETE ::::::::::::::::')
            delete=QueryDict(request.body)
            idproducto=delete.get('idproducto')

            cursor=connection.cursor()
            cursor.execute("DELETE FROM Productos WHERE idproducto="+idproducto)
            return HttpResponse('OK')
        except:
            HttpResponseBadRequest('Bad Request')
    else:
        HttpResponseBadRequest('No DELETE Method')