from django.conf.urls import url, include
from django.contrib import admin
from .views import getproducto,inicioproductos,buscarproducto,actualizarproducto,ingresarproducto,eliminarproducto


urlpatterns = [
    url(r'^$',inicioproductos,name="inicioproductos"),
    url(r'^getproducto',getproducto,name="getproducto"),
    url(r'^buscarproducto/',buscarproducto,name="buscarproducto"),
    url(r'^actualizarproducto/',actualizarproducto,name="actualizarproducto"),
    url(r'^ingresarproducto/',ingresarproducto,name="ingresarproducto"),
    url(r'^eliminarproducto/',eliminarproducto,name="eliminarproducto"),
]