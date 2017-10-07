from django.conf.urls import url,include
from django.contrib import admin
from .views import getpersona,iniciopersonas,buscarpersona,actualizarpersona,ingresarpersona,eliminarpersona


urlpatterns = [
    url(r'^$',iniciopersonas,name="iniciopersonas"),
    url(r'^getpersona/',getpersona,name="getpersona"),
    url(r'^buscarpersona/',buscarpersona,name="buscarpersona"),
    url(r'^actualizarpersona/',actualizarpersona,name="actualizarpersona"),
    url(r'^ingresarpersona/',ingresarpersona,name="ingresarpersona"),
    url(r'^eliminarpersona/',eliminarpersona,name="eliminarpersona"),
]