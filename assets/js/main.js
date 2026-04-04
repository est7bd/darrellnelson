/* darrellnelson.org — main.js */

// Easter egg — console message
(function() {
  const b = 'color: #4f8ff7; font-weight: bold; font-size: 13px;';
  const d = 'color: #68788f; font-size: 12px;';
  const w = 'color: #dce4f4; font-size: 12px;';
  console.log('%c'
    + '██████╗ ███╗   ██╗\n'
    + '██╔══██╗████╗  ██║\n'
    + '██║  ██║██╔██╗ ██║\n'
    + '██║  ██║██║╚██╗██║\n'
    + '██████╔╝██║ ╚████║\n'
    + '╚═════╝ ╚═╝  ╚═══╝', b);
  console.log('%cDarrell Nelson%c — darrellnelson.org', b, d);
  console.log('%c───────────────────────────────────────', d);
  console.log('%cHey. You opened devtools. I respect that.', w);
  console.log('%cFounder & CEO · Varayo  |  est. 0x7BD (1981)', d);
  console.log('%c───────────────────────────────────────', d);
  console.log('%c→ linkedin.com/in/darrellnelson', d);
  console.log('%c→ x.com/est7bd', d);
})();

document.addEventListener('DOMContentLoaded', () => {

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

});
