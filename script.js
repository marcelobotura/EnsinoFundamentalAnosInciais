const galeria = document.querySelector('.galeria');
const fotos = document.querySelectorAll('.galeria img');
let contador = 0;

function slideshow() {
    contador++;
    if (contador >= fotos.length) {
        contador = 0;
    }
    galeria.style.transform = `translateX(-${contador * 100}%)`;
}

setInterval(slideshow, 3000);