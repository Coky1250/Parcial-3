/*Ingresar nueva nota*/
document.addEventListener("DOMContentLoaded", function() {
    var botonSubirNota = document.getElementById("botonNota");
    var ventanaEmergente = document.getElementById("ventanaEmergente");
    var cerrarVentana = document.getElementById("cerrarVentana");
    var formularioIngresarNota = document.getElementById("formularioNota");

    botonSubirNota.addEventListener("click", function() {
        ventanaEmergente.style.display = "block";
    });

    cerrarVentana.addEventListener("click", function() {
        ventanaEmergente.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === ventanaEmergente) {
            ventanaEmergente.style.display = "none";
        }
    });

    formularioIngresarNota.addEventListener("submit", function(event) {
        // Agrega aquí la lógica para manejar el envío del formulario
        event.preventDefault(); // Evita que el formulario se envíe normalmente
        ventanaEmergente.style.display = "none"; // Cierra el modal después de enviar el formulario
    });
});

/*Edita las notas*/

document.addEventListener("DOMContentLoaded", function() {
    var botonEditarNota = document.getElementById("botonEditar");
    var ventanaEmergente2 = document.getElementById("ventanaEmergente2");
    var cerrarVentana2 = document.getElementById("cerrarVentana2");
    var formularioIngresarNota2 = document.getElementById("formularioNota2");

    botonEditarNota.addEventListener("click", function() {
        ventanaEmergente2.style.display = "block";
    });

    cerrarVentana2.addEventListener("click", function() {
        ventanaEmergente2.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === ventanaEmergente2) {
            ventanaEmergente2.style.display = "none";
        }
    });

    formularioIngresarNota2.addEventListener("submit", function(event) {
        // Agrega aquí la lógica para manejar el envío del formulario
        event.preventDefault(); // Evita que el formulario se envíe normalmente
        ventanaEmergente2.style.display = "none"; // Cierra el modal después de enviar el formulario
    });
});

/*ver las notas*/

document.addEventListener("DOMContentLoaded", function() {
    var botonVerNota = document.getElementById("botonVer");
    var ventanaEmergente3 = document.getElementById("ventanaEmergente3");
    var cerrarVentana3 = document.getElementById("cerrarVentana3");

    botonVerNota.addEventListener("click", function() {
        ventanaEmergente3.style.display = "block";
    });

    cerrarVentana3.addEventListener("click", function() {
        ventanaEmergente3.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === ventanaEmergente3) {
            ventanaEmergente3.style.display = "none";
        }
    });
});
