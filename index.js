// JavaScript para validar que los campos no estén vacíos antes de permitir el envío.
// Nombre, correo y mensaje

// Funcion para validar que los campos no estén vacíos al dar click al boton de enviar

function validarFormulario() {
    // Se obtienen los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    // Se valida que los campos no estén vacíos
    if (nombre == null || nombre.length == 0 || correo == null || correo.length == 0 || mensaje == null || mensaje.length == 0) {
        alert('ERROR: Llene todos los campos');
        return false;
    } else {
        alert('Formulario enviado con éxito');
        return true;
    }
}