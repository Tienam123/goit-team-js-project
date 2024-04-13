const mobileMenu = document.querySelector('.header-menu__body');
const menuList = document.querySelector('.menu__list');
const menuButton = document.querySelector('.menu__button');
const burgerButton = document.querySelector('.header__menu-burger');
const closeButton = document.querySelector('.button__close');
const menuLinks = document.querySelectorAll('.menu__item a');
const themeButton = document.querySelector('.header-menu__body #switcher');
const container1 = document.querySelector('.header__actions');
const header = document.querySelector('header');
const mql = window.matchMedia('(max-width:768px)');
function screenChange(e) {
  if (e.matches) {
    menuList.classList.add('menu-hidden-desktop')
  } else  {
    mobileMenu.classList.add('menu-hidden-mobile')
  }
}
mql.addEventListener('change',screenChange)
menuButton.addEventListener('click',()=> {
  menuList.classList.toggle('menu-hidden-desktop')
})

burgerButton.addEventListener('click',()=> {
  mobileMenu.classList.remove('menu-hidden-mobile')
})

closeButton.addEventListener('click',()=> {
  mobileMenu.classList.add('menu-hidden-mobile')
})

menuLinks.forEach(el => {
  el.addEventListener('click', ()=> {
    mobileMenu.classList.add('menu-hidden-mobile')
    menuList.classList.add('menu-hidden-desktop')

  })
})

window.addEventListener('scroll',(event)=>{
  if (window.scrollY > 250) {
    header.classList.add('header__scrolled')
    header.classList.remove('header_on-top')
  } else {
    header.classList.remove('header__scrolled')
    header.classList.add('header_on-top')
  }
})