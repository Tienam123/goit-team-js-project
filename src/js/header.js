import throttle from 'lodash.throttle'

const mobileMenu = document.querySelector('.header-menu__body');
const isActiveMenu = document.querySelector('.header__menu');
const menuList = document.querySelector('.menu__list');
const menuButton = document.querySelector('.menu__button');
const burgerButton = document.querySelector('.header__menu-burger');
const closeButton = document.querySelector('.button__close');
const btnBuyNow = document.querySelector('.header__buy-now-mobile');
const menuLinks = document.querySelectorAll('.menu__item a');
const header = document.querySelector('header');
const mql = window.matchMedia('(max-width:768px)');
const scrollToUpBtn = document.querySelector('.scroll-to-up');
const buttons = {
  aboutMe: document.querySelector('#about-me'),
  benefits: document.querySelector('#benefits'),
  faq: document.querySelector('#faq'),
  workTogether: document.querySelector('#work-together'),
  projects: document.querySelector('#projects'),
};
const sections = {
  benefits: document.querySelector('.benefits'),
  aboutMe: document.querySelector('.about'),
  faq: document.querySelector('.faq'),
  workTogether: document.querySelector('.work-together'),
  projects: document.querySelector('.projects'),
};

buttons.aboutMe.addEventListener('click', (e) => {
  e.preventDefault();
  sections.aboutMe.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

buttons.benefits.addEventListener('click', (e) => {
  e.preventDefault();
  sections.benefits.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

});
buttons.projects.addEventListener('click', (e) => {
  e.preventDefault();
  sections.projects.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

buttons.faq.addEventListener('click', (e) => {
  e.preventDefault();
  sections.faq.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});


function screenChange(e) {
  if (e.matches) {
    menuList.classList.add('menu-hidden-desktop');
  } else {
    mobileMenu.classList.add('menu-hidden-mobile');
  }
}

mql.addEventListener('change', screenChange);
menuButton.addEventListener('click', () => {
  menuList.classList.toggle('menu-hidden-desktop');
});

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-hidden-mobile');
  isActiveMenu.classList.add('header__menu_active');
  document.body.classList.add('screen-blocked');
  scrollToUpBtn.classList.add('visually-hidden');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.add('menu-hidden-mobile');
  isActiveMenu.classList.remove('header__menu_active');
  document.body.classList.remove('screen-blocked');
  scrollToUpBtn.classList.remove('visually-hidden');
});

menuLinks.forEach(el => {
  el.addEventListener('click', () => {
    isActiveMenu.classList.remove('header__menu_active');
    menuList.classList.add('menu-hidden-desktop');
    document.body.classList.remove('screen-blocked');
  });
});
btnBuyNow.addEventListener('click',()=>{
  isActiveMenu.classList.remove('header__menu_active');
  document.body.classList.remove('screen-blocked');
})
const handleScroll = (event) => {
  if (window.scrollY > 250) {
    header.classList.add('header__scrolled');
    scrollToUpBtn.classList.remove('visually-hidden');
    header.classList.remove('header_on-top');
  } else {
    header.classList.remove('header__scrolled');
    scrollToUpBtn.classList.add('visually-hidden');
    header.classList.add('header_on-top');
  }
}

window.addEventListener('scroll', throttle(handleScroll,250));


