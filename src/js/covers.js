(function() {
  const coverBlock = document.querySelector('.content');
  const images = document.querySelectorAll('.marquee__line');

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        images.forEach(image => image.classList.add('animate-block'));
      } else {
        images.forEach(image => image.classList.remove('animate-block'));
      }
    });
  }

  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  observer.observe(coverBlock);

})();
