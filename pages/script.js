//IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    window.currentFrame = slides[slideIndex].name;
    // intervalId = setInterval(nextSlide, 10000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
  window.currentFrame = slides[slideIndex].name;
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}


//link pentru formular

function sendOrder(){
  const orderMessage = document.querySelector('input[name="order-message"]');
  const orderFrame = window.currentFrame;
  const orderPrefers = document.querySelector('input[name="order-prefers"]');
  const orderEmail = document.querySelector('input[name="order-email"]');
  console.log(orderMessage.value, orderFrame, orderPrefers.value, orderEmail.value)
}
