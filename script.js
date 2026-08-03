// Mobile Menü
const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => header.classList.remove('open'));
  });
}

// Jahr im Footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Aktuellen Wochentag in der Öffnungszeiten-Tabelle hervorheben
const dayIndex = new Date().getDay(); // 0 = Sonntag
const hoursRows = document.querySelectorAll('.hours-table tr');
if (hoursRows.length === 7) {
  const orderIndex = dayIndex === 0 ? 6 : dayIndex - 1; // Montag = 0 ... Sonntag = 6
  hoursRows[orderIndex].classList.add('today');
}

// Scroll-Reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
