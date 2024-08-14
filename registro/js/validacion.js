document.getElementById('regBtn').addEventListener('click', function() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var password1 = document.getElementById('password1').value.trim();
    var password2 = document.getElementById('password2').value.trim();
    var terminos = document.getElementById('terminos').checked;

    var alertSuccess = document.getElementById('alert-success');
    var alertDanger = document.getElementById('alert-danger');

    // Limpiar alertas anteriores
    alertSuccess.classList.remove('show');
    alertDanger.classList.remove('show');

    // Validar campos
    if (!nombre || !apellido || !email || !password1 || !password2) {
        alertDanger.textContent = 'Ningún campo puede estar vacío.';
        alertDanger.classList.add('show');
        return;
    }

    if (password1.length < 6) {
        alertDanger.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        alertDanger.classList.add('show');
        return;
    }

    if (password1 !== password2) {
        alertDanger.textContent = 'Las contraseñas no coinciden.';
        alertDanger.classList.add('show');
        return;
    }

    if (!terminos) {
        alertDanger.textContent = 'Debes aceptar los términos y condiciones del servicio.';
        alertDanger.classList.add('show');
        return;
    }

    // Si todas las validaciones pasan
    alertSuccess.classList.add('show');
});
