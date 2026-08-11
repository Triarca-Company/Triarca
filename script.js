const topbar = document.getElementById('topbar');
const toggle = document.querySelector('.menu-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      topbar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const solutionToggles = document.querySelectorAll('.solution-toggle');
solutionToggles.forEach((button) => {
  const more = button.nextElementSibling;
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    more.classList.toggle('open', !isOpen);
    button.textContent = isOpen ? 'Saiba mais' : 'Mostrar menos';
  });
});
