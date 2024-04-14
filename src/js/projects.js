import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperProject = new Swiper('.swiper-projects', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next-projects',
    prevEl: '.swiper-button-prev-projects',
    disabledClass: 'swiper-button-projects-disabled',
  },
});
