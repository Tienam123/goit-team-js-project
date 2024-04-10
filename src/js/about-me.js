// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
import Accordion from 'accordion-js';

// new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
//   spaceBetween: 0,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//     1280: {
//       slidesPerView: 3,
//       spaceBetween: 25,
//     },
//     1440: {
//       slidesPerView: 5,
//       spaceBetween: 0,
//     },
//   },
// });

// new Accordion('.accordion-container');
new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  }
});