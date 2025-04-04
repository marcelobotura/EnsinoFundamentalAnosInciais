const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const indicadores = slider.querySelectorAll('.indicadores span');
let indiceAtual = 0;

function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
        slide.style.display = i === indice ? 'block' : 'none';
    });

    indicadores.forEach((indicador, i) => {
        indicador.style.backgroundColor = i === indice ? 'blue' : 'gray';
    });
}

function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
}

setInterval(proximoSlide, 3000);

indicadores.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        indiceAtual = i;
        mostrarSlide(indiceAtual);
    });
});