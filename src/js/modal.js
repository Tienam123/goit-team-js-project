const scrolltoUp = document.querySelector('.scroll-to-up');

scrolltoUp.addEventListener('click',(e)=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})