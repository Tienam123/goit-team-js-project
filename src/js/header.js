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
const scrollToUpBtn =  document.querySelector('.scroll-to-up');
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
  document.body.classList.add('screen-blocked')
  scrollToUpBtn.classList.add('visually-hidden');
})

closeButton.addEventListener('click',()=> {
  mobileMenu.classList.add('menu-hidden-mobile')
  document.body.classList.remove('screen-blocked')
  scrollToUpBtn.classList.remove('visually-hidden');
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
    scrollToUpBtn.classList.remove('visually-hidden')
    header.classList.remove('header_on-top')
  } else {
    header.classList.remove('header__scrolled')
    scrollToUpBtn.classList.add('visually-hidden')
    header.classList.add('header_on-top')
  }
})