function ValidarLogin(e) {
    var usuario;
    var contraseña;
    usuario.document.getElementById("usuario");
    contraseña.document.getElementById("contraseña");
    if (usuario==="admin" && contraseña ==="admin") {
        location='index.html';
    } else {
        alert("Usuario o contraseña incorrecta");
        return false;
    }
}