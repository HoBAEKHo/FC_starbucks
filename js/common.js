const searchEl = document.querySelector('.search-wrap');

searchEl.addEventListener('click', () => {
  searchEl.focus();
})


//올해 년수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();