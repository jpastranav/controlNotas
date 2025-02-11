function userExist() {
    let adminUser = "Admin"; // Usuario por defecto
    let adminPassword = "0000"; // Contraseña por defecto
    let verifyUser = document.getElementById("username").value; // Obtiene valor del campo "username
    let verifyPassword = document.getElementById("password").value; // Obtiene valor del campo "password"


    if (adminUser === verifyUser && adminPassword === verifyPassword) { //Verifica si el usuario y contraseña coinciden con los establecidos por defecto
        alert("Redirigiendo a la página de inicio");
        window.location.href = "../functions/register.html"; // Redirige a la página deseada
        return true;
    } else {
        alert("Usuario no existe o credenciales incorrectas");
        return false;
    }
}