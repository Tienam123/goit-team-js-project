(function() {
  const refs = {
    input: document.querySelector('#switcher'),
  };
  let theme =   refs.input.checked = JSON.parse(localStorage.getItem('theme'));
  if (theme) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
  refs.input.checked = JSON.parse(localStorage.getItem('theme'));
  refs.input.addEventListener('click', (e) => {
    if (e.target.checked) {
      e.target.checked = true;
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme',JSON.stringify(true))
    } else {
      e.target.checked = false;
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme',JSON.stringify(false))
    }
  });
})();