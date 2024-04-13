import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';


const mySwiper = new Swiper('.swiper-skills-list', {
  initialSlide: -1,
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  // centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    1440: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: '.skills-arrow',
  },
  // mousewheel: {
  //   invert: true,
  // },
});
  

  // mySwiper.on('slideChange', function () {
  //   const activeSlide = document.querySelector(
  //     '.swiper-slide-active .skills-button'
  //   );
  //   const activeButton = document.querySelector('.skills-button-active');

  //   if (activeButton) {
  //     activeButton.classList.remove('skills-button-active');
  //   }

  //   if (activeSlide) {
  //     activeSlide.classList.add('skills-button-active');
  //   }
  // });

