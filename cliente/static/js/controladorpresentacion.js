function pintarbuscarpersona() {
    string = "";
    string = string + '<h6>Ingrese el Numero ID</h6>';
    string = string + '<input type="text" id="idpersona"><br><br>';
    string = string + '<a class="btn btn-primary" onclick="buscarpersona(idpersona.value);">Buscar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/personas/">Cancelar</a>';
    $('.contenedor').html(string);
}

function pintarbuscarpersonaactualizar() {
    string = "";
    string = string + '<h6>Ingrese el Numero ID</h6>';
    string = string + '<input type="text" id="idpersona"><br><br>';
    string = string + '<a class="btn btn-primary" onclick="datosactualizar(idpersona.value);">Buscar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/personas/">Cancelar</a>';
    $('.contenedor').html(string);
}

function pintaringresarpersona() {
    string = "";
    string = "<h3>Datos Persona</h3><table>";
    string = string + "<td><strong>Nombres</strong></td>";
    string = string + "<td><strong><input type='text' id='nombres' value='Nombres'></strong></td></tr>";
    string = string + "<td><strong>Apellidos</strong></td>";
    string = string + "<td><strong><input type='text' id='apellidos' value='Apellidos'></strong></td></tr>";
    string = string + "<td><strong>Cedula</strong></td>";
    string = string + "<td><strong><input type='text' id='cedula' value='Cedula'></strong></td></tr>";
    string = string + "<td><strong>Contraseña</strong></td>";
    string = string + "<td><strong><input type='text' id='contrasena1' value='Contraseña'></strong></td></tr>";
    string = string + "<td><strong>Contraseña</strong></td>";
    string = string + "<td><strong><input type='text' id='contrasena2' value='Contraseña'></strong></td></tr>";
    string = string + "<td><strong>Tipo Persona</strong></td>";
    string = string + "<td><strong><input type='text' id='tipousuario' value='Tipo Usuario'></strong></td></tr>";
    string = string + "<br>";
    string = string + '<a class="btn btn-primary" onclick="ingresarpersona(nombres.value,apellidos.value,cedula.value,contrasena1.value,contrasena2.value,tipousuario.value);">Ingresar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/personas/">Cancelar</a>';
    $('.contenedor').html(string);
}

function pintareliminarpersona() {
    string = "";
    string = string + '<h6>Ingrese el Numero ID</h6>';
    string = string + '<input type="text" id="idpersona"><br><br>';
    string = string + '<a class="btn btn-primary" onclick="eliminarpersona(idpersona.value);">Eliminar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/personas/">Cancelar</a>';
    $('.contenedor').html(string);
}

//Productos ////////////////////////////////////

function pintarbuscarproducto() {
    string = "";
    string = string + '<h6>Ingrese el Numero ID</h6>';
    string = string + '<input type="text" id="idproducto"><br><br>';
    string = string + '<a class="btn btn-primary" onclick="buscarproducto(idproducto.value);">Buscar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/productos/">Cancelar</a>';
    $('.contenedor').html(string);
}

function pintarbuscarproductoactualizar() {
    string = "";
    string = string + '<h6>Ingrese el Numero ID</h6>';
    string = string + '<input type="text" id="idproducto"><br><br>';
    string = string + '<a class="btn btn-primary" onclick="datosactualizarproductos(idproducto.value);">Buscar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/productos/">Cancelar</a>';
    $('.contenedor').html(string);
}

function pintaringresarproducto() {
    string = "";
    string = "<h3>Datos Producto</h3><table>";
    string = string + "<td><strong>Nombre</strong></td>";
    string = string + "<td><strong><input type='text' id='nombre' value='Nombre'></strong></td></tr>";
    string = string + "<td><strong>Precio</strong></td>";
    string = string + "<td><strong><input type='text' id='precio' value='Precio'></strong></td></tr>";
    string = string + "<td><strong>Existentes</strong></td>";
    string = string + "<td><strong><input type='text' id='existentes' value='Existentes'></strong></td></tr>";
    string = string + "<br>";
    string = string + '<a class="btn btn-primary" onclick="ingresarproducto(nombre.value,precio.value,existentes.value);">Ingresar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/productos/">Cancelar</a>';
    $('.contenedor').html(string);
}

function pintareliminarproducto() {
    string = "";
    string = string + '<h6>Ingrese el Numero ID</h6>';
    string = string + '<input type="text" id="idproducto"><br><br>';
    string = string + '<a class="btn btn-primary" onclick="eliminarproducto(idproducto.value);">Eliminar</a>';
    string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/productos/">Cancelar</a>';
    $('.contenedor').html(string);
}