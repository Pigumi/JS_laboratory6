//arreglos
var arrProvincia = [{"id_provincia":"8", "nombre_provincia":"Panamá"}, 
                    {"id_provincia":"13", "nombre_provincia":"Panamá Oeste"}]

var arrDistrito = [ {"id_provincia":"8","id_distrito":"1", "nombre_distrito": "Chepo"},
                    {"id_provincia":"8","id_distrito":"2", "nombre_distrito": "San Miguelito"},
                    {"id_provincia":"8","id_distrito":"3", "nombre_distrito": "Chilibre"},
                    {"id_provincia":"13","id_distrito":"1", "nombre_distrito": "Chorrera"},
                    {"id_provincia":"13","id_distrito":"3", "nombre_distrito": "Capira"},
                    {"id_provincia":"13","id_distrito":"1", "nombre_distrito": "San Carlos"}
]
//fin de arreglos

//comienzo ciclo for para mostrar las provicinas en tiempo de ejecucion
for (var i = 0; i<arrProvincia.length; i++){
    var opcion = document.createElement("option");
    opcion.value = arrProvincia[i].id_provincia;
    opcion.text = arrProvincia[i].nombre_provincia;
    document.getElementById("slProvincia").appendChild(opcion);
}
//fin ciclo for

function mostrar_distrito(){
    var id_provincia = document.getElementById("slProvincia").value;

    for (var i=0; i<arrDistrito.length; i++)
    document.getElementById("slDistrito").remove(0)

    for (var i=0; i<arrDistrito.length; i++){
        if (id_provincia == arrDistrito[i].id_provincia){
            var opcion2 = document.createElement("option")
            opcion2.value = arrDistrito[i].id_distrito;
            opcion2.text = arrDistrito[i].nombre_distrito;
            document.getElementById("slDistrito").appendChild(opcion2);
        }
    }
}

function calcular_salario(){
    //definir variables
    var nombre = document.getElementById("txtNombre").value;
    var salarioxhora = document.getElementById("txtSalarioxHora").value;
    var horas = document.getElementById("txtHorasTrabajadas").value;

    //si trabajo horas extras
    var horas_extras=0 
    if (document.getElementById("chkHorasExtras").checked)
    {
        horas_extras = parseFloat(salarioxhora) * 2 * parseFloat(document.getElementById("txtHorasExtras").value)
    }
    else
    document.getElementById("txtHorasExtras").value = ""

    //calculo salario neto
    var salario_bruto = parseFloat(salarioxhora) * parseFloat(horas) + horas_extras;
    //imprimir respuesta
    document.getElementById("verSalario").innerHTML = salario_bruto.toFixed(2);
    document.getElementById("txtSalarioBruto"). value = salario_bruto.toFixed(2);

    //validacion de datos
    if(nombre.trim() == ""){
        alert("escriba un nombre")
        document.getElementById("txtNombre").focus();
        return 
    }
    //valida que el nombre tenga mas de 5 caracteres
    if(nombre.trim().length < 5){
        alert("el nombre debe tener mínimo 5 caracteres")
        document.getElementById("txtNombre").focus();
        return 
    }

    if(salarioxhora.trim() == ""){
        alert("Ingrese el salario por hora")
        document.getElementById("txtSalarioxHora").focus();
        return 
    }

    if(horas.trim() == ""){
        alert("Ingrese la cantidad de horas trabajada")
        document.getElementById("txtHorasTrabajadas").focus();
        return 
    }
}
function posicionar_cursor(){
    document.getElementById("txtNombre").focus();
}

//validacion de datos obligatorios para problema 1 y 2
function validar_contenido(campo, etiqueta){
    if(campo.value.trim() == ""){
        etiqueta.innerHTML="Este campo es necesario"
        
        return 
    }
    else
    etiqueta.innerHTML=""
}

function mostrar_ocultar_horas_extras(){
    if (document.getElementById("divHorasExtras").style.display=="none" )
        document.getElementById("divHorasExtras").style.display="block"
    else
        document.getElementById("divHorasExtras").style.display="none"
}

//funciones para problema 2
function validar_info(){

    var password = document.getElementById("txtPassword").value;
    var comentario = document.getElementById("txtComentario").value;

    //validar contraseña
    if (password.trim().length < 8){
        alert("La contraseña no debe tener menos de 8 caracteres")
        document.getElementById("txtPassword").focus();
        document.getElementById("txtPassword").value = ""
        return 
    }

    //valida que el comentario tenga menos de 50 caracteres
    if(comentario.trim().length > 50){
        alert("el comentario no puede tener mas de 50 carácteres")
        document.getElementById("txtComentario").focus();
        return 
    }
}