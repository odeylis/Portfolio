function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});
