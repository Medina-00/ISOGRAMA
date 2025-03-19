let palabra = document.getElementById('palabra');
const dialogo = document.getElementById('miDialogo');
const mensajeDialogo = document.getElementById('mensajeDialogo');
const cerrarBoton = document.getElementById('cerrarDialogo');

document.getElementById('btn').addEventListener('click', () => { 
    let letraspasadas = [];
    console.log(palabra.value.toUpperCase());
    for (const element of palabra.value.toUpperCase()) {
        console.log(element);
        if (letraspasadas.includes(element)) {
            console.log('La Letra repetida es : '+element);
            mostrarDialogo('¡Hola! LA PALABRA PASADA NO ES UN ISTOGRAMA YA QUE LA LETRA '+element+' SE REPITE');
            break;
        }
        else
        {
            mostrarDialogo('¡Hola! LA PALABRA PASADA ES UN ISTOGRAMA');

        }
       
        letraspasadas.push(element);
    }
});



// Función para mostrar el dialog con un mensaje personalizado
function mostrarDialogo(mensaje) {
  mensajeDialogo.textContent = mensaje; // Cambia el contenido del mensaje
  dialogo.showModal(); // Muestra el dialog como modal
}

// Función para cerrar el dialog
cerrarBoton.addEventListener('click', () => {
  dialogo.close(); // Cierra el dialog
});

// Ejemplo: Mostrar el dialog automáticamente al cargar la página
