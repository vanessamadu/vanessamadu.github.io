/* vanessa-site.js — shared JS for vanessamadu.com */

// ── Mobile nav hamburger ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const links = document.querySelector('.nav-links');
  if (!nav || !links) return;

  // Create hamburger button
  const btn = document.createElement('button');
  btn.className = 'nav-hamburger';
  btn.setAttribute('aria-label', 'Open navigation menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  nav.appendChild(btn);

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.innerHTML = open
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });

  // Close when clicking a link
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }
  });
});
