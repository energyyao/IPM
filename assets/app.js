const current = window.location.pathname.split('/').pop() || 'index.html';
const links = document.querySelectorAll('[data-nav]');
links.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === current) {
    link.classList.add('active');
  }
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
