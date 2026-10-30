const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('#primary-navigation');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu điều hướng');
    navigation.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Mở menu điều hướng' : 'Đóng menu điều hướng');
    navigation.classList.toggle('is-open', !isExpanded);
  });

  navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });
}

const signature = document.querySelector('[data-signature]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

if (signature && finePointer.matches && !reduceMotion.matches) {
  const resetTilt = () => {
    signature.style.setProperty('--tilt-x', '0deg');
    signature.style.setProperty('--tilt-y', '0deg');
  };

  signature.addEventListener('pointermove', (event) => {
    const bounds = signature.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    signature.style.setProperty('--tilt-y', `${(relativeX - 0.5) * 7}deg`);
    signature.style.setProperty('--tilt-x', `${(0.5 - relativeY) * 6}deg`);
  });
  signature.addEventListener('pointerleave', resetTilt);
  reduceMotion.addEventListener('change', (event) => {
    if (event.matches) resetTilt();
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
