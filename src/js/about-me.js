import Accordion from 'accordion-js';

new Accordion('.accordion-container', {
  duration: 500,
  showMultiple: true,
  openOnInit: [0],
});

const acButtons = document.querySelectorAll('.ac-trigger');
const acS = document.querySelectorAll('.ac-icon');
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

  })
);
