import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper-hero', {
  modules: [
    Navigation
    ,
    Autoplay
  ],
  effect: 'fade',
  loop: true,
  autoplay:{
    delay:5000
  },
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
