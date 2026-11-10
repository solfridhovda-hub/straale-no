// Mobilmeny: åpne og lukke, med riktig aria-expanded for skjermlesere.
// Aktiv side er satt i HTML-en (class="active" og aria-current="page").
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  const settApen = (apen) => {
    navLinks.classList.toggle('open', apen);
    hamburger.setAttribute('aria-expanded', apen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', apen ? 'Lukk meny' : 'Meny');
  };

  hamburger.addEventListener('click', () => {
    settApen(hamburger.getAttribute('aria-expanded') !== 'true');
  });

  // Escape lukker menyen og sender fokus tilbake til knappen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      settApen(false);
      hamburger.focus();
    }
  });

  // Lukk menyen når en lenke velges
  navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) settApen(false);
  });
}
