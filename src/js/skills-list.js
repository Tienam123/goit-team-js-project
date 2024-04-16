import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';

const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const additionalSlidesCount = 12;
for (let i = 0; i < additionalSlidesCount; i++) {
  const clonedSlide = slides[i].cloneNode(true);
  swiperWrapper.appendChild(clonedSlide);
}

const mySwiper = new Swiper('.swiper-skills-list', {
  initialSlide: 0,
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.skills-arrow',
  },
  watchOverflow: true,
  mousewheel: {
    invert: true,
  },
  on: {
    init: function () {
      const swiperSlides = this.slides;
      for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].style.width = 'auto';
      }

    //   const activeIndex = this.activeIndex;
    //   swiperSlides.forEach((slide, index) => {
    //     if (index === activeIndex) {
    //       slide.classList.add('active-slide');
    //     } else {
    //       slide.classList.remove('active-slide');
    //     }
    //   });
    // },
    // slideChange: function () {
    //   const swiperSlides = this.slides;
    //   const activeIndex = this.activeIndex;
    //   swiperSlides.forEach((slide, index) => {
    //     if (index === activeIndex) {
    //       slide.classList.add('active-slide');
    //     } else {
    //       slide.classList.remove('active-slide');
    //     }
    //   });
    },
  },
});
