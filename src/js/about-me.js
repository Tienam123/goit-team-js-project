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
  openOnInit: [0],

  onOpen: function (currentElement) {
    // console.log(currentElement);
    // console.log('currentElement is open');
    // currentElement.querySelector('svg.ac-icon').innerHTML = `<path d="M15 12.5L10 7.5L5 12.5" stroke="#FAFAFA" stroke-width="2" />`;
    currentElement.querySelector('svg.ac-icon').classList.add('ac-icon-active');
  },
  onClose: function (currentElement) {
    // console.log(currentElement);
    // console.log('currentElement is closed');
    // currentElement.querySelector('svg.ac-icon').innerHTML = `<path d="M15 7.5L10 12.5L5 7.5" stroke="#FAFAFA" stroke-width="2" />`;
    currentElement
      .querySelector('svg.ac-icon')
      .classList.remove('ac-icon-active');
  },
});
