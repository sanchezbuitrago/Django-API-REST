# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse, QueryDict
from django.db import connection
import json
# Create your views here.
def iniciopersonas(request):
    """metodo que lanza la pagina principal"""

    return render(request, 'personas.html')

def getpersona(request):
    """ Retorna las personas en la BD  """

    print "Entra al Backend POST::::::::::::::::::::."
    if request.method == 'GET':
        try:
            print "Entra al Backend POST::::::::::::::::::::."
            cursor = connection.cursor()
            listcontext = []

            for c in cursor.execute("SELECT * FROM Personas"):
                context = {}
                context['idpersona'] = c[0]
                context['nombres'] = c[1]
                context['apellidos'] = c[2]
                context['cedula'] = c[3]
                listcontext.append(context)
        except:
            return HttpResponseBadRequest('Bad Request')
        return JsonResponse(listcontext, safe=False)
    else:
        return HttpResponseBadRequest("NO GET METHOD")


def buscarpersona(request):
    if request.method == 'GET':
        try:
            cursor=connection.cursor()
            listcontext=[]
            idpersona=request.GET.get('idpersona')
            for c in cursor.execute("SELECT * FROM Personas WHERE idpersona="+idpersona):
                context={}
                context['idpersona']=c[0]
                context['nombres']=c[1]
                context['apellidos']=c[2]
                context['cedula']=c[3]
                context['contrasena']=c[4]
                listcontext.append(context)
        except:
            return HttpResponseBadRequest('Bad Request')
        return JsonResponse(listcontext,safe=False)
    else:
        return HttpResponseBadRequest("NO GET METHOD")

def actualizarpersona(request):
    if request.method=='PUT':
        print("Backend PUT :::::::::::::::::")
        try:
            put=QueryDict(request.body)

            idpersona=put.get('idpersona')
            nombres=put.get('nombres')
            apellidos=put.get('apellidos')
            cedula=put.get('cedula')
            contrasena=put.get('contrasena')
            print(idpersona)
            print(nombres)
            print(apellidos)
            print(cedula)
            cursor=connection.cursor()
            cursor.execute("UPDATE Personas SET nombres='"+nombres+"',apellidos='"+apellidos+"',cedula='"+cedula+"', contrasena='"+contrasena+"' WHERE idpersona="+idpersona+";")
            return HttpResponse("OK")
        except:
            return HttpResponseBadRequest("Bad Request")
    else:
        return HttpResponseBadRequest("No PUT Method")

def ingresarpersona(request):
    if request.method=='POST':
        try:
            nombres = request.POST.get('nombres')
            apellidos=request.POST.get('apellidos')
            cedula=request.POST.get('cedula')
            contrasena=request.POST.get('contrasena')
            tipousuario=request.POST.get('tipousuario')
            cursor=connection.cursor()
            cursor.execute("INSERT INTO Personas(nombres,apellidos,cedula,contrasena,tipousuario) VALUES('"+nombres+"','"+apellidos+"','"+cedula+"','"+contrasena+"',"+tipousuario+")")
            return HttpResponse('OK')
        except:
            HttpResponseBadRequest('Bad Request')
    else:
        HttpResponseBadRequest('No POST Method')

def eliminarpersona(request):
    if request.method=='DELETE':
        try:
            print('Backend DELETE ::::::::::::::::')
            delete=QueryDict(request.body)
            idpersona=delete.get('idpersona')

            cursor=connection.cursor()
            cursor.execute("DELETE FROM Personas WHERE idpersona="+idpersona)
            return HttpResponse('OK')
        except:
            HttpResponseBadRequest('Bad Request')
    else:
        HttpResponseBadRequest('No DELETE Method')