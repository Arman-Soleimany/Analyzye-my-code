const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let massages = []
    if (email.value === '' || email.value == null) {
        massages.push('Please specify a valid e-mail')
    }
    if (massages.length > 0) {
        e.preventDefault()
    }
    else {

        alert('Email submitted. Thank you')
    }
})

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-of-andrew, .slider-of-richard, .slider-of-lespberry');
const dots = document.querySelectorAll('.slider-buttons li');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-index'));
        showSlide(currentSlide);
    });
});

setInterval(nextSlide, 5000);
showSlide(currentSlide);