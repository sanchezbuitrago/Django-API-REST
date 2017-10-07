//Codigo para post por ajax

$(function () {
    //Obtenemos la información de csfrtoken que se almacena por cookies en el cliente
    var csrftoken = getCookie('csrftoken');

    //Agregamos en la configuración de la funcion $.ajax de Jquery lo siguiente:
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});

function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}

// usando jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function csrfSafeMethod(method) {
    // estos métodos no requieren CSRF
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

//final codigo peticiones post por ajax

//codigo para una peticion
/*
var csrftoken = getCookie('csrftoken');
$.ajax({
    // la URL para la petición
    url : 'http://127.0.0.1:8000/login/',
 
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    data : {"csrfmiddlewaretoken":csrftoken},
 
    // especifica si será una petición POST o GET
    type : 'POST',
 
    // el tipo de información que se espera de respuesta
    dataType : 'json',
 
    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(json) {
        console.log("si funciona")
    }
*/

function obtenerpersonas() {
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/personas/getpersona/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val() },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log(json);


            string = "<h3>Datos Persona</h3><table>";
            string = string + "<tr><td><strong>Id</strong></td>";
            string = string + "<td><strong>Nombres</strong></td>";
            string = string + "<td><strong>Apellidos</strong></td>";
            string = string + "<td><strong>Cedula</strong></td>";
            string = string + "<td><strong></strong></td>";
            string = string + "<td><strong></strong></td></tr>";
            for (var i = 0; i < json.length; i++) {
                string = string + "<tr><td><strong>" + json[i].idpersona + "</strong></td>";
                string = string + "<td><strong>" + json[i].nombres + "</strong></td>";
                string = string + "<td><strong>" + json[i].apellidos + "</strong></td>";
                string = string + "<td><strong>" + json[i].cedula + "</strong></td>";
                string = string + '<td><strong><a class="btn btn-primary" onclick="datosactualizar(' + json[i].idpersona + ');">Actualizar</a></strong></td>';
                string = string + '<td><strong><a class="btn btn-primary" onclick="eliminarpersona(' + json[i].idpersona + ');">Eliminar</a></strong></td></tr>';
            }
            $('.contenedor').html(string);
        },
        error: function (xhr, status) {
            alert('Verifique Usuario y Contraseña');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });

}

function buscarpersona(datopersona) {
    console.log(datopersona);
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/personas/buscarpersona/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idpersona': datopersona },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log(json);

            string = "<h3>Datos Persona</h3><table>";
            string = string + "<tr><td><strong>Id</strong></td>";
            string = string + "<td><strong>Nombres</strong></td>";
            string = string + "<td><strong>Apellidos</strong></td>";
            string = string + "<td><strong>Cedula</strong></td>";
            string = string + "<td><strong></strong></td>";
            string = string + "<td><strong></strong></td></tr>";
            for (var i = 0; i < json.length; i++) {
                string = string + "<tr><td><strong>" + json[i].idpersona + "</strong></td>";
                string = string + "<td><strong>" + json[i].nombres + "</strong></td>";
                string = string + "<td><strong>" + json[i].apellidos + "</strong></td>";
                string = string + "<td><strong>" + json[i].cedula + "</strong></td>";
                string = string + '<td><strong><a class="btn btn-primary" onclick="datosactualizar(' + json[i].idpersona + ');">Actualizar</a></strong></td>';
                string = string + '<td><strong><a class="btn btn-primary" onclick="eliminarpersona(' + json[i].idpersona + ');">Eliminar</a></strong></td></tr>';
            }
            $('.contenedor').html(string);
        },
        error: function (xhr, status) {
            alert('Verifique Usuario y Contraseña');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });

}

function datosactualizar(datopersona) {
    console.log(datopersona);
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/personas/buscarpersona/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idpersona': datopersona },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log(json);

            string = "<h3>Datos Persona</h3><table>";
            for (var i = 0; i < json.length; i++) {
                string = string + "<tr><td><strong>Id</strong></td>";
                string = string + "<td><strong><input type='text' id='idpersona' value='" + json[i].idpersona + "' readonly='readonly' ></strong></td></tr>";
                string = string + "<td><strong>Nombres</strong></td>";
                string = string + "<td><strong><input type='text' id='nombres' value='" + json[i].nombres + "'></strong></td></tr>";
                string = string + "<td><strong>Apellidos</strong></td>";
                string = string + "<td><strong><input type='text' id='apellidos' value='" + json[i].apellidos + "'></strong></td></tr>";
                string = string + "<td><strong>Cedula</strong></td>";
                string = string + "<td><strong><input type='text' id='cedula' value='" + json[i].cedula + "'></strong></td></tr>";
                string = string + "<td><strong>Contraseña</strong></td>";
                string = string + "<td><strong><input type='text' id='contrasena1' value='" + json[i].contrasena + "'></strong></td></tr>";
                string = string + "<td><strong>Contraseña</strong></td>";
                string = string + "<td><strong><input type='text' id='contrasena2' value='" + json[i].contrasena + "'></strong></td></tr>";
            }
            string = string + "<br>";
            string = string + '<a class="btn btn-primary" onclick="actualizarpersona(idpersona.value,nombres.value,apellidos.value,cedula.value,contrasena1.value,contrasena2.value);">Actualizar</a>';
            string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/personas/">Cancelar</a>';
            $('.contenedor').html(string);
        },
        error: function (xhr, status) {
            alert('Verifique Usuario y Contraseña');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });

}

function actualizarpersona(idpersona, nombres, apellidos, cedula, contrasena1, contrasena2) {
    var csrftoken = getCookie('csrftoken');
    if (contrasena1 == contrasena2) {
        $.ajax({
            // la URL para la petición
            url: 'http://10.21.83.7:8000/personas/actualizarpersona/',

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: { 'idpersona': idpersona, 'nombres': nombres, 'apellidos': apellidos, 'cedula': cedula, 'contrasena': contrasena1 },

            // especifica si será una petición POST o GET
            type: 'PUT',

            // el tipo de información que se espera de respuesta
            dataType: 'text',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (json) {
                alert("Datos Actualizados");
                location.href = "http://10.21.83.7:8000/personas/";
            },
            error: function (xhr, status) {
                alert('Verifique Usuario y Contraseña');
                alert(xhr.responseText);
            },

            // código a ejecutar sin importar si la petición falló o no
            complete: function (xhr, status) {
                console.log('Petición realizada');
            }
        });
    } else {
        alert("Las Contraseñas no son iguales")
    }
}

function ingresarpersona(nombres, apellidos, cedula, contrasena1, contrasena2, tipousuario) {
    if (sessionStorage.getItem('cedula') != null) {
        var csrftoken = getCookie('csrftoken');
        if (contrasena1 == contrasena2) {
            $.ajax({
                // la URL para la petición
                url: 'http://10.21.83.7:8000/personas/ingresarpersona/',

                // la información a enviar
                // (también es posible utilizar una cadena de datos)
                data: { 'nombres': nombres, 'apellidos': apellidos, 'cedula': cedula, 'contrasena': contrasena1, 'tipousuario': tipousuario },

                // especifica si será una petición POST o GET
                type: 'POST',

                // el tipo de información que se espera de respuesta
                dataType: 'text',

                // código a ejecutar si la petición es satisfactoria;
                // la respuesta es pasada como argumento a la función
                success: function (json) {
                    alert("Datos Ingresados");
                    location.href = "http://10.21.83.7:8000/personas/";
                },
                error: function (xhr, status) {
                    alert('Verifique Usuario y Contraseña');
                    alert(xhr.responseText);
                },

                // código a ejecutar sin importar si la petición falló o no
                complete: function (xhr, status) {
                    console.log('Petición realizada');
                }
            });
        } else {
            alert("Las contraseñas no son iguales");
        }
    } else {
        alert("Ud no a iniciado Sesion");
        location.href = "http://10.21.83.7:8000/";
    }
}

function eliminarpersona(idpersona) {
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/personas/buscarpersona/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idpersona': idpersona },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            if (json.length != 0) {
                if (true == confirm('Quiere Eliminar Los Datos De : ' + json[0].nombres + " " + json[0].apellidos)) {
                    var csrftoken = getCookie('csrftoken');
                    $.ajax({
                        // la URL para la petición
                        url: 'http://10.21.83.7:8000/personas/eliminarpersona/',

                        // la información a enviar
                        // (también es posible utilizar una cadena de datos)
                        data: { 'idpersona': idpersona, },

                        // especifica si será una petición POST o GET
                        type: 'DELETE',

                        // el tipo de información que se espera de respuesta
                        dataType: 'text',

                        // código a ejecutar si la petición es satisfactoria;
                        // la respuesta es pasada como argumento a la función
                        success: function (text) {
                            alert('Se Eliminaron Los Datos De : ' + json[0].nombres + " " + json[0].apellidos);
                            location.href = "http://10.21.83.7:8000/personas/";
                        },
                        error: function (xhr, status) {
                            alert('Verifique Usuario y Contraseña');
                            alert(xhr.responseText);
                        },

                        // código a ejecutar sin importar si la petición falló o no
                        complete: function (xhr, status) {
                            console.log('Petición realizada');
                        }
                    });

                }
            } else {
                alert("No se encontraron datos con ID=" + idpersona)
            }
        },
        error: function (xhr, status) {
            alert('Verifique Usuario y Contraseña');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function login(cedula, contrasena) {
    var csrftoken = getCookie('csrftoken');

    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/inicio/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'cedula': cedula, 'contrasena': contrasena },

        // especifica si será una petición POST o GET
        type: 'POST',

        // el tipo de información que se espera de respuesta
        dataType: 'html',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            sessionStorage.setItem('cedula', cedula);
            sessionStorage.setItem('contrasena', contrasena);
            console.log(json);
            $('.page-top').html(json);
        },
        error: function (xhr, status) {
            alert('Verifique Usuario y Contraseña');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });
}

//Productos /////////////////////////////////////////////////////////////////////////////

function obtenerproductos() {
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/productos/getproducto/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val() },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log(json);


            string = "<h3>Datos Productos</h3><table>";
            string = string + "<tr><td><strong>Id</strong></td>";
            string = string + "<td><strong>Nombre</strong></td>";
            string = string + "<td><strong>Precio</strong></td>";
            string = string + "<td><strong>Existentes</strong></td>";
            string = string + "<td><strong></strong></td>";
            string = string + "<td><strong></strong></td></tr>";
            for (var i = 0; i < json.length; i++) {
                string = string + "<tr><td><strong>" + json[i].idproducto + "</strong></td>";
                string = string + "<td><strong>" + json[i].nombre + "</strong></td>";
                string = string + "<td><strong>" + json[i].precio + "</strong></td>";
                string = string + "<td><strong>" + json[i].existentes + "</strong></td>";
                string = string + '<td><strong><a class="btn btn-primary" onclick="datosactualizarproductos(' + json[i].idproducto + ');">Actualizar</a></strong></td>';
                string = string + '<td><strong><a class="btn btn-primary" onclick="eliminarproducto(' + json[i].idproducto + ');">Eliminar</a></strong></td></tr>';
            }
            $('.contenedor').html(string);
        },
        error: function (xhr, status) {
            alert('Error en los Datos Ingresados');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });

}

function buscarproducto(idproducto) {
    console.log(idproducto);
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/productos/buscarproducto/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idproducto': idproducto },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log(json);

            string = "<h3>Datos Persona</h3><table>";
            string = string + "<tr><td><strong>Id</strong></td>";
            string = string + "<td><strong>Nombre</strong></td>";
            string = string + "<td><strong>Precio</strong></td>";
            string = string + "<td><strong>Existentes</strong></td>";
            string = string + "<td><strong></strong></td>";
            string = string + "<td><strong></strong></td></tr>";
            for (var i = 0; i < json.length; i++) {
                string = string + "<tr><td><strong>" + json[i].idproducto + "</strong></td>";
                string = string + "<td><strong>" + json[i].nombre + "</strong></td>";
                string = string + "<td><strong>" + json[i].precio + "</strong></td>";
                string = string + "<td><strong>" + json[i].existentes + "</strong></td>";
                string = string + '<td><strong><a class="btn btn-primary" onclick="datosactualizarproductos(' + json[i].idproducto + ');">Actualizar</a></strong></td>';
                string = string + '<td><strong><a class="btn btn-primary" onclick="eliminarproducto(' + json[i].idproducto + ');">Eliminar</a></strong></td></tr>';
            }
            $('.contenedor').html(string);
        },
        error: function (xhr, status) {
            alert('Error en los Datos Ingresados');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });

}

function datosactualizarproductos(idproducto) {
    console.log(idproducto);
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/productos/buscarproducto/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idproducto': idproducto },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            console.log(json);

            string = "<h3>Datos Producto</h3><table>";
            for (var i = 0; i < json.length; i++) {
                string = string + "<tr><td><strong>Id</strong></td>";
                string = string + "<td><strong><input type='text' id='idproducto' value='" + json[i].idproducto + "' readonly='readonly' ></strong></td></tr>";
                string = string + "<td><strong>Nombre</strong></td>";
                string = string + "<td><strong><input type='text' id='nombre' value='" + json[i].nombre + "'></strong></td></tr>";
                string = string + "<td><strong>Precio</strong></td>";
                string = string + "<td><strong><input type='text' id='precio' value='" + json[i].precio + "'></strong></td></tr>";
                string = string + "<td><strong>Existentes</strong></td>";
                string = string + "<td><strong><input type='text' id='existentes' value='" + json[i].existentes + "'></strong></td></tr>";
            }
            string = string + "<br>";
            string = string + '<a class="btn btn-primary" onclick="actualizarproducto(idproducto.value,nombre.value,precio.value,existentes.value);">Actualizar</a>';
            string = string + '<a class="btn btn-primary" href="http://10.21.83.7:8000/productos/">Cancelar</a>';
            $('.contenedor').html(string);
        },
        error: function (xhr, status) {
            alert('Error en los Datos Ingresados');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });

}

function actualizarproducto(idproducto, nombre, precio, existentes) {
    var csrftoken = getCookie('csrftoken');
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/productos/actualizarproducto/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idproducto': idproducto, 'nombre': nombre, 'precio': precio, 'existentes': existentes },

        // especifica si será una petición POST o GET
        type: 'PUT',

        // el tipo de información que se espera de respuesta
        dataType: 'text',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            alert("Datos Actualizados");
            location.href = "http://10.21.83.7:8000/productos/";
        },
        error: function (xhr, status) {
            alert('Error en los Datos Ingresados');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function ingresarproducto(nombre, precio, existentes) {
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/productos/ingresarproducto/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'nombre': nombre, 'precio': precio, 'existentes': existentes },

        // especifica si será una petición POST o GET
        type: 'POST',

        // el tipo de información que se espera de respuesta
        dataType: 'text',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            alert("Datos Ingresados");
            location.href = "http://10.21.83.7:8000/productos/";
        },
        error: function (xhr, status) {
            alert('Error en los Datos Ingresados');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function eliminarproducto(idproducto) {
    $.ajax({
        // la URL para la petición
        url: 'http://10.21.83.7:8000/productos/buscarproducto/',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data: { 'idproducto': idproducto },

        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            if (json.length != 0) {
                if (true == confirm('Quiere Eliminar Los Datos De : ' + json[0].nombre)) {
                    var csrftoken = getCookie('csrftoken');
                    $.ajax({
                        // la URL para la petición
                        url: 'http://10.21.83.7:8000/productos/eliminarproducto/',

                        // la información a enviar
                        // (también es posible utilizar una cadena de datos)
                        data: { 'idproducto': idproducto, },

                        // especifica si será una petición POST o GET
                        type: 'DELETE',

                        // el tipo de información que se espera de respuesta
                        dataType: 'text',

                        // código a ejecutar si la petición es satisfactoria;
                        // la respuesta es pasada como argumento a la función
                        success: function (text) {
                            alert('Se Eliminaron Los Datos De : ' + json[0].nombre);
                            location.href = "http://10.21.83.7:8000/productos/";
                        },
                        error: function (xhr, status) {
                            alert('Error en los Datos Ingresados');
                            alert(xhr.responseText);
                        },

                        // código a ejecutar sin importar si la petición falló o no
                        complete: function (xhr, status) {
                            console.log('Petición realizada');
                        }
                    });

                }
            } else {
                alert("No se encontraron datos con ID=" + idpersona)
            }
        },
        error: function (xhr, status) {
            alert('Error en los Datos Ingresados');
            alert(xhr.responseText);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Petición realizada');
        }
    });
}