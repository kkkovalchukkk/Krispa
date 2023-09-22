window.addEventListener('DOMContentLoaded', () => {
  const mainNavListItemSubmenu = document.querySelectorAll(
    '.main-nav-list-item--submenu'
  );

  const mainNav = document.querySelector('.main-nav');

  mainNavListItemSubmenu.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('main-nav-list-item--active');
      mainNav.classList.add('main-nav--non-rounded');
      const subMenu = item.querySelector('.main-nav-list-item__submenu');
      subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
    });

    item.addEventListener('mouseleave', () => {
      mainNav.classList.remove('main-nav--non-rounded');
      const subMenu = item.querySelector('.main-nav-list-item__submenu');
      item.classList.remove('main-nav-list-item--active');
      subMenu.style.maxHeight = '0px';
    });

    item.addEventListener('click', () => {
      if (item.classList.contains('main-nav-list-item--active')) {
        mainNav.classList.remove('main-nav--non-rounded');
        const subMenu = item.querySelector('.main-nav-list-item__submenu');
        item.classList.remove('main-nav-list-item--active');
        subMenu.style.maxHeight = '0px';
      } else {
        item.classList.add('main-nav-list-item--active');
        mainNav.classList.add('main-nav--non-rounded');
        const subMenu = item.querySelector('.main-nav-list-item__submenu');
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }
    });
  });
});
