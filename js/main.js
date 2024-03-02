document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelector('.imagenes');
    const puntos = document.querySelectorAll('.punto');
    let indice = 0;
    const totalImagenes = imagenes.children.length;
    let intervalo;

    // Función para cambiar la imagen actual
    function cambiarImagen(index) {
        indice = index;
        const desplazamiento = -indice * 100;
        imagenes.style.transform = `translateX(${desplazamiento}%)`;
        actualizarPuntos();
    }

    // Función para actualizar el punto activo
    function actualizarPuntos() {
        puntos.forEach(punto => punto.classList.remove('activo'));
        puntos[indice].classList.add('activo');
    }

    // Función para avanzar al siguiente elemento
    function siguienteImagen() {
        if (indice < totalImagenes - 1) {
            cambiarImagen(indice + 1);
        } else {
            cambiarImagen(0); // Volvemos a la primera imagen
        }
    }

    // Iniciar el intervalo para cambiar automáticamente las imágenes
    intervalo = setInterval(siguienteImagen, 3000); // Cambié el tiempo a 3 segundos (3000 milisegundos)

    // Detener el intervalo cuando el mouse está sobre el carrusel
    imagenes.addEventListener('mouseenter', () => {
        clearInterval(intervalo);
    });

    // Reanudar el intervalo cuando el mouse sale del carrusel
    imagenes.addEventListener('mouseleave', () => {
        intervalo = setInterval(siguienteImagen, 3000); // Reanudar el intervalo con el nuevo tiempo
    });

    // Event listener para los puntos indicadores
    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            cambiarImagen(index);
        });
    });
});

