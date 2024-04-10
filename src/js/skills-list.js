// Отримуємо всі елементи з класом skills-button
const skillButtons = document.querySelectorAll('.skill-list');

// Початкове значення змінної number
let number = 0;

// Функція для встановлення активного елемента
function setActive() {
  // Перевіряємо, чи виходимо за межі діапазону
  if (number >= skillButtons.length) {
    number = 0;
  }

  // Знімаємо клас active з усіх елементів
  skillButtons.forEach(button => {
    button.classList.remove('skills-button-active');
    button.classList.add('skills-button-disabled');
  });

  // Перевіряємо data-id кожного елемента і порівнюємо його з поточним значенням number
  skillButtons.forEach((button, index) => {
    const dataId = parseInt(button.getAttribute('data-id'));
    if (dataId === number + 1) {
      // Якщо data-id співпадає з number + 1, то встановлюємо класи active
      button.classList.add('skills-button-active');
      button.classList.remove('skills-button-disabled');
    }
  });

  // Збільшуємо number для наступного елемента
  number++;
}

// Обробник подій для стрілки
document.querySelector('.arrow-list').addEventListener('click', setActive);

// Встановлення активного елемента при завантаженні сторінки
setActive();

// const mySwiper = new Swiper('.swiper-skills-list', {
//   watchSlidesProgress: true,
//   slidesPerView: 2,
//   navigation: {
//     nextEl: '.arrow-list',
//   },
//   mousewheel: {
//     invert: true,
//   },
//   on: {
//     slideChange: function () {
//       // Знаходимо всі елементи слайдів
//       const allSlides = document.querySelectorAll('.skills-button');

//       // Знімаємо клас 'skills-button-active' з усіх елементів слайдів
//       allSlides.forEach(function (slide) {
//         slide.classList.remove('skills-button-active');
//         slide.classList.add('skills-button-disabled');
//       });

//       // Отримуємо активний слайд
//       let activeSlide = document.querySelector(
//         '.swiper-slide-active .skills-button'
//       );

//       // Додаємо клас 'skills-button-active' до активного елемента слайда
//       activeSlide.classList.add('skills-button-active');
//       activeSlide.classList.remove('skills-button-disabled');
//     },
//   },
// });
