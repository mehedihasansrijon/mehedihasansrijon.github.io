document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');

    // Clone the slides to create an infinite effect
    for (let i = 0; i < slides.length; i++) {
      const clonedSlide = slides[i].cloneNode(true);
      sliderContainer.appendChild(clonedSlide);
    }
  });