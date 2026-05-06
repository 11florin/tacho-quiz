const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navList = navMenu.querySelector('ul');

// Toggle menu
hamburger.addEventListener('click', function () {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'close menu' : 'open menu');
});

// Close menu when clicking on any link — event delegation on <ul>
navList.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'open menu');
  }
});