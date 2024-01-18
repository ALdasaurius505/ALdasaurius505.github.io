function validate() {
    var correo = document.getElementById("Correo").value;
    var contraseña = document.getElementById("Contraseña").value;

    if (correo == "Usuario" && contraseña == "Contraseña") {
        alert("Inicio de sesión exitoso")
        window.location = "principal.html";
        // Aquí puedes redirigir a la página principal
        // window.location = "tu_pagina_principal.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }

    return false;
}