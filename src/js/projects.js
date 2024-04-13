// swiper?????
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperProjects = new Swiper('.swiper-projects', {
  // Optional parameters
  direction: 'horisontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-projects',
    prevEl: '.swiper-button-prev-projects',
  },
});
