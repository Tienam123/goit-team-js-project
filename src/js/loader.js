const loader = document.querySelector('.body-loader');
document.addEventListener("DOMContentLoaded", function(event) {
  loader.classList.add('loader_is-hidden')
  window.scrollTo({
    top:0
  })
});