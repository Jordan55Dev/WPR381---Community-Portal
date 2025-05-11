document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-carousel .slide');
  const dots   = document.querySelectorAll('.hero-carousel .dot');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((s,i) => {
      s.classList.toggle('active', i === idx);
      dots[i].classList.toggle('active', i === idx);
    });
    current = idx;
  }

  document.querySelector('.carousel-next').addEventListener('click', () => {
    showSlide((current + 1) % slides.length);
  });

  document.querySelector('.carousel-prev').addEventListener('click', () => {
    showSlide((current - 1 + slides.length) % slides.length);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', e => showSlide(Number(e.target.dataset.slide)));
  });
});
