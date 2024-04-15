import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const mySwiper = new Swiper('.swiper-skills-list', {
  modules: [Navigation,Keyboard,Mousewheel],
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport:true
  },

  navigation: {
    nextEl: '.swiper-skill-list-next',
  },
  mousewheel: true,

});
