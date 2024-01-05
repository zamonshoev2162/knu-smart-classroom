'use strict';

const header = document.querySelector('.header');

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  const menuIcon = targetElement.closest('.menu__icon');
  const gotoElement = targetElement.closest('[data-goto]');

  if (menuIcon) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (gotoElement) {
    document.documentElement.classList.remove('menu-open');
    const goTo = gotoElement.dataset.goto;
    const goToElement = document.querySelector(goTo);

    window.scrollTo({
      top: goToElement.offsetTop - header.offsetHeight,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  speed: 1500,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
