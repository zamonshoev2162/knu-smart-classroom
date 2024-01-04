'use strict';

const header = document.querySelector('.header');

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  const menuIcon = targetElement.closest('.menu__icon');
  const gotoElement = targetElement.closest('[data-goto]');

  if (menuIcon || gotoElement) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (gotoElement) {
    const goTo = gotoElement.dataset.goto;
    const goToElement = document.querySelector(goTo);

    if (goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - header.offsetHeight,
        behavior: 'smooth',
      });
    }
    e.preventDefault();
  }
});
