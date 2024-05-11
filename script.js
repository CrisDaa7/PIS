// Esta función maneja el envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales y redirigir según el usuario
    if (email === "admi@unl.edu.ec" && password === "admi12345") {
        window.location.href = "admi.html"; // Redirigir al panel de administración
    } else if (email === "cristian.ajila@unl.edu.ec" && password === "criss12345") {
        window.location.href = "cde.html"; // Redirigir al centro de disertaciones estudiantiles
    } else {
        alert("Credenciales incorrectas. Por favor, intenta nuevamente."); // Mensaje de error
    }
});

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordToggle = document.getElementById("togglePassword");

    // Cambiar el tipo de entrada entre 'password' y 'text'
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = "&#x1F440;"; // Cambiar el ícono a ojo cerrado
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = "&#x1F441;"; // Cambiar el ícono a ojo abierto
    }
}
