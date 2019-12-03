function SoloNumero(e){
    key = e.keyCode || e.which; //Almacenar entrada del teclado
    teclado=String.fromCharCode(key);
    numero="0123456789";//va a contener todos los numeros validos
    especiales="8-37-38-46";//Contiene todos los caracteres especiales
    teclado_especial=false;
    for (var i in especiales){
        if (key==especiales[i]){
            teclado_especial=true;
        }
    }
    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}
function Validar() {
    var cedula, nombre, apellido, telf, edad, correo;
    cedula = document.getElementById("cedula").value;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telf = document.getElementById("telf").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    expCorreo =/\w+@\w+\.+[a-z]/;
    if (nombre===""){
        alert("El campo nombre esta vacio");
        return false;
    } else if (apellido===""){
        alert("El campo apellido esta vacio");
        return false;
    } else if (cedula===""){
        alert("El campo cedula esta vacio");
        return false;
    } else if (edad===""){
        alert("El campo edad esta vacio");
        return false;
    } else if (telf===""){
        alert("El campo telefono esta vacio");
        return false;
    } else if (correo===""){
        alert("El campo correo esta vacio");
        return false;
    }else if(!expCorreo.test(correo)){
        alert("El correo es invalido");
        return false;
    } else if(edad<18 || edad>60){
        alert("Necesita ser mayor de edad o menor de 60 años");
        return false;
    }
}

function sololetras(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="qwertyuiopasdfghjklñzxcvbnm ";
    especiales="8-37-38-46-164";
    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
            break;
        }
    }
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}