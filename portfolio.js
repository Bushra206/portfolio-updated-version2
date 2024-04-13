var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween:100,
    // centeredSlides: true,
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
     980: {
       slidesPerView: 2,
       spaceBetween: 40,
     },
     1000: {
       slidesPerView: 2,
       spaceBetween: 40,
     },
    1100: {
      slidesPerView:2,
      spaceBetween:80,
    },
  },
  });
    