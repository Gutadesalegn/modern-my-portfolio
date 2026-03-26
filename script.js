const darkToggle = document.getElementById('darkToggle');
const body = document.getElementById('body');
const themeIcon = document.getElementById('themeIcon');
const nav = document.querySelector('nav');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  nav.classList.add('dark');
  themeIcon.src = './images/sun_icon.png';
}

// Toggle dark mode
darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  nav.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    themeIcon.src = './images/sun_icon.png';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.src = './images/moon_icon.png';
    localStorage.setItem('theme', 'light');
  }
});