/* Carrossel */
const track = document.querySelector('.carrossel-track');
const slides = document.querySelectorAll('.carrossel-track video, .carrossel-track img');
let atual = 0;

document.getElementById('proximo').addEventListener('click', () => {
    atual = (atual + 1) % slides.length;
    track.scrollTo({ left: slides[atual].offsetLeft, behavior: 'smooth' });
});

document.getElementById('anterior').addEventListener('click', () => {
    atual = (atual - 1 + slides.length) % slides.length;
    track.scrollTo({ left: slides[atual].offsetLeft, behavior: 'smooth' });
});

/* Pesquisa */
function filtrar() {
    const termo = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titulo = card.querySelector('.card-titulo').textContent.toLowerCase();
        card.style.display = titulo.includes(termo) ? 'block' : 'none';
    });
}