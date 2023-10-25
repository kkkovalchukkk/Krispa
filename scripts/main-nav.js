window.addEventListener('DOMContentLoaded', () => {
  const mainNavListItemSubmenu = document.querySelectorAll(
    '.main-nav-list-item--submenu'
  )

  const mainNav = document.querySelector('.main-nav')

  // const mobileMenuNav = document.querySelector('.mobile-menu__nav-block--submenu')
  // const mobileMenuNavSubItems = document.querySelectorAll('.main-nav-list-item__submenu-col-heading')


  let previousPosition =
    window.pageYOffset || document.documentElement.scrollTop

  window.onscroll = function () {
    let currentPosition =
      window.pageYOffset || document.documentElement.scrollTop
    console.log(currentPosition)

    if (currentPosition >= 130) {
      document.querySelector('.header').classList.add('fixed')
      document.querySelector('.navigation-section').classList.add('fixed')
    } else {
      document.querySelector('.header').classList.remove('fixed')
      document.querySelector('.navigation-section').classList.remove('fixed')
    }
    previousPosition = currentPosition
  }

  // mobileMenuNav.addEventListener('click', () => {
  //   mobileMenuNav.classList.add('main-nav-list-item--active')
  // })

  mainNavListItemSubmenu.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('main-nav-list-item--active')
      mainNav.classList.add('main-nav--non-rounded')
      const subMenu = item.querySelector('.main-nav-list-item__submenu')
      subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
    })

    item.addEventListener('mouseleave', () => {
      mainNav.classList.remove('main-nav--non-rounded')
      const subMenu = item.querySelector('.main-nav-list-item__submenu')
      item.classList.remove('main-nav-list-item--active')
      subMenu.style.maxHeight = '0px'
    })

    item.addEventListener('click', () => {
      if (item.classList.contains('main-nav-list-item--active')) {
        mainNav.classList.remove('main-nav--non-rounded')
        const subMenu = item.querySelector('.main-nav-list-item__submenu')
        item.classList.remove('main-nav-list-item--active')
        subMenu.style.maxHeight = '0px'
      } else {
        item.classList.add('main-nav-list-item--active')
        mainNav.classList.add('main-nav--non-rounded')
        const subMenu = item.querySelector('.main-nav-list-item__submenu')
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
      }
    })
  })
})
