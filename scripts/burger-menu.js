window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const burgerMenu = document.querySelector('.mobile-menu');
  const closeBurgerMenuBtn = document.querySelector('.mobile-menu__close-btn');

  burgerBtn.addEventListener('click', () => {
    document.body.classList.add('no-scroll');
    burgerMenu.classList.add('mobile-menu--active');
  });

  closeBurgerMenuBtn.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    burgerMenu.classList.remove('mobile-menu--active');
  });
});
