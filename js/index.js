
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
    loop: true,

  },
  autoplay: {
    delay: 2000,
  },
    pagination: {
    el: ".swiper-pagination",
    },
  });