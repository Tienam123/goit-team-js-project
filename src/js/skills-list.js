import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const skillButtons = document.querySelectorAll('.skill-list');
let number = 0;
let mySwiper = null; //

mySwiper = new Swiper('.swiper-skills-list', {
  modules: [Navigation],
  spaceBetween:20,
  slidesPerView:2,
  loop:true,
  breakpoints: {
    768: {
      slidesPerView:3,
      spaceBetween:"50px"
    } ,
    1440: {
      slidesPerView: 6,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});
