import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});

new Accordion('.accordion-container');
