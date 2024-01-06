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

const onEntry = (entry) =>
  entry.forEach((change) =>
    change.target.classList.toggle('show', change.isIntersecting)
  );

const observer = new IntersectionObserver(onEntry, { threshold: [0.5] });
document
  .querySelectorAll('.animation-element')
  .forEach((el) => observer.observe(el));

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  speed: 1500,
  autoplay: { delay: 1500 },
  pagination: { el: '.swiper-pagination', clickable: true },
});
