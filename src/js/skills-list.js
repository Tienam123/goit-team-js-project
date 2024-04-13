import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const skillButtons = document.querySelectorAll('.skill-list');
let number = 0;
let mySwiper = null; //

mySwiper = new Swiper('.swiper-skills-list', {
  modules: [Navigation],
  spaceBetween:20,
  loop:true,
  breakpoints: {
    320: {
      slidesPerView:2,
      spaceBetween:6,
    } ,
    768: {
      slidesPerView:3,
      spaceBetween:6,
      centeredSlides:true,
    } ,
    1440: {
      slidesPerView: 5,
      centeredSlides:true,
    }
  },

  navigation: {
    nextEl: ".swiper-skill-list-next",
  },
});
