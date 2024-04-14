import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
const swiper = new Swiper('.swiper-hero', {
  modules: [
    Navigation
    ,
    Autoplay,
  ],
  loop: true,
  autoplay: {
    delay: 5000,
    waitForTransition: true,
  },
  speed: 1000,
  direction: 'horizontal',
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

});
