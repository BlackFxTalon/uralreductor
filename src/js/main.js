/* alpine.js */

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// AOS

AOS.init();

/* swiper.js */

 // import Swiper bundle with all modules installed
 import Swiper from 'swiper/bundle';

// custom scripts

// scrolltoTop function

const scrollToTop = () => window.scrollTo(0,0);

document.querySelector('.to-top-btn').addEventListener('click', scrollToTop);

// init Swiper:
const reductorTypesSlider = new Swiper('.reductor-types__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  
  // If we need pagination
  pagination: {
    el: '.reductor-types__pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reductor-types__button-next',
    prevEl: '.reductor-types__button-prev',
  },
  breakpoints: {
    
    1023: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1440: {
      spaceBetween: 46,
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
});
const productCardGalleryThumbs = new Swiper(".product-card__gallery-thumbs", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 5,
  watchSlidesProgress: true,
});

const productCardGalleryMain = new Swiper(".product-card__gallery-main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productCardGalleryThumbs,
  },
});



function toggleToTopBtn() {
  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 600) {
        document.querySelector('.to-top-btn').classList.add('active');
    } else {
      document.querySelector('.to-top-btn').classList.remove('active');
    }
  })
}

toggleToTopBtn();