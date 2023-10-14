let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

showSlide(slideIndex);

// Auto change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
