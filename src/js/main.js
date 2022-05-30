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
  spaceBetween: 20,
  slidesPerView: 5,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      spaceBetween: 0
    }
  }
});

const productCardGalleryMain = new Swiper(".product-card__gallery-main", {
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

function addShadowOnHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll',()=>{
    if(window.scrollY >= 10) {
      header.classList.add('header--box-shadow');
    } else {
      header.classList.remove('header--box-shadow');
    }
  })
}
addShadowOnHeaderScroll();

import { magicMouse } from 'magicmouse.js';


const options = {
	"cursorOuter": "circle-basic",
	"hoverEffect": "circle-move",
	"hoverItemMove": true,
	"defaultCursor": true,
	"outerWidth": 16,
	"outerHeight": 16
  };
  magicMouse(options);


function targetsForMagicMouse(elems) {
  elems.classList.add('magic-hover','magic-hover__square');
}

document.querySelectorAll('a, button, .reductor-types__card, .header__search, .catalog-card, summary').forEach(targetsForMagicMouse);

const customCursor = document.querySelector('#magicMouseCursor');

function toggleFadedClassOnCursor(elems) {
  if(window.innerWidth >= 980) {
    elems.addEventListener('focusin',()=>{
      customCursor.classList.add('faded');
    })
    elems.addEventListener('focusout',()=>{
      customCursor.classList.remove('faded');
    })
  }
}

document.querySelectorAll('input').forEach(toggleFadedClassOnCursor);

function toggleClassOnCursor(elems) {
  if(window.innerWidth >= 980) {
    elems.addEventListener('mouseover',()=>{
      customCursor.classList.add('hovered');
    })
    elems.addEventListener('mouseout',()=>{
      customCursor.classList.remove('hovered');
      customCursor.classList.remove('clicked');
    })
    elems.addEventListener('click',()=>{
      customCursor.classList.add('clicked');
    })
  }
}

document.querySelectorAll('.magic-hover').forEach(toggleClassOnCursor);

function reduceButtonOnClick() {
  if(window.innerWidth >= 980) {
      const reduceBtn = (el) => {
          el.addEventListener('click',()=>{
              el.classList.add('reduce');
          })
        }
        document.querySelectorAll('.primary-btn, .secondary-btn').forEach(reduceBtn);
  }
}

reduceButtonOnClick();

new SimpleBar(document.querySelector('.articles-card-main-info__formula-lists'));