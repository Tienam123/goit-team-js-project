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
  duration: 500,
  showMultiple: true,
  openOnInit: [0],
});

const acButtons = document.querySelectorAll('.ac-trigger');
const acS = document.querySelectorAll('.ac-icon');
console.log(acS);
acButtons.forEach(item =>
  item.addEventListener('click', () => {
    if (item.querySelector('svg.ac-icon').classList.contains('icon-first')) {
      if (
        item
          .querySelector('svg.ac-icon')
          .classList.contains('ac-icon-active-first')
      )
        item
          .querySelector('svg.ac-icon')
          .classList.remove('ac-icon-active-first');
      else {
        item.querySelector('svg.ac-icon').classList.add('ac-icon-active-first');
      }
    }
    if (
      item.querySelector('svg.ac-icon').classList.contains('ac-icon-active')
    ) {
      item.querySelector('svg.ac-icon').classList.remove('ac-icon-active');
    } else {
      item.querySelector('svg.ac-icon').classList.add('ac-icon-active');
    }

    // if (
    //   item.querySelector('svg.ac-icon').classList.contains('ac-icon-active')
    // ) {
    //   item.querySelector('svg.ac-icon').classList.remove('ac-icon-active');
    // } else {
    //   item.querySelector('svg.ac-icon').classList.add('ac-icon-active');
    // }
  })
);
