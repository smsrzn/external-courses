const prev = document.getElementById('previous');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = (n) => {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[n].classList.add('active');
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index += 1;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index -= 1;
    activeSlide(index);
  }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
