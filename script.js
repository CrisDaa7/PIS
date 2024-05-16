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


document.addEventListener('DOMContentLoaded', function () {
    const users = [
        // Ejemplo de datos de usuario. Esto debería ser reemplazado por datos reales desde el backend.
        { nombre: 'Juan', apellido: 'Pérez', telefono: '1234567890', email: 'juan.perez@example.com', rol: 'Director', carrera: 'Computación' },
        { nombre: 'Ana', apellido: 'García', telefono: '0987654321', email: 'ana.garcia@example.com', rol: 'Secretario', carrera: 'Telecomunicaciones' },
        // Agrega más usuarios aquí...
    ];

    const searchInput = document.getElementById('searchInput');
    const searchFilter = document.getElementById('searchFilter');
    const searchButton = document.getElementById('searchButton');
    const userTableBody = document.querySelector('#userTable tbody');

    function renderTable(users) {
        userTableBody.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.telefono}</td>
                <td>${user.email}</td>
                <td>${user.rol}</td>
                <td>${user.carrera}</td>
            `;
            userTableBody.appendChild(row);
        });
    }

    function searchUsers() {
        const query = searchInput.value.toLowerCase();
        const filter = searchFilter.value;
        const filteredUsers = users.filter(user => user[filter].toLowerCase().includes(query));
        renderTable(filteredUsers);
    }

    searchButton.addEventListener('click', searchUsers);

    // Renderizar todos los usuarios inicialmente
    renderTable(users);
});


