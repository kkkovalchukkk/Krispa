window.addEventListener('DOMContentLoaded', () => {
  const mainNavListItemSubmenu = document.querySelectorAll('.main-nav-list-item--submenu')
  const mainNav = document.querySelector('.main-nav')

  const sidebarAccordeonBlock = document.querySelector('.sidebar__accordion-list')
  const allReviewsForm = document.querySelector('.all-reviews-section__form')

  const closeBurgerMenuBtn = document.querySelector('.mobile-menu__close-btn')
  const mobileMenu = document.querySelector('.mobile-menu__nav')
  const mobileMenuSubmenu = document.querySelector('.mobile-menu-submenu')
  const mobileNavBtn = document.querySelector('.mobile-menu__nav-block--submenu--btn')
  const mobileNavBtnInner = document.querySelector('.mobile-menu__nav-block--submenu--nonDisplayed')
  const mobileBlocksInnerContent = document.querySelectorAll('.mobile-menu__nav-block--submenu__li-nav')
  const mobileInnerContentBtns = document.querySelectorAll('.mobile-menu__nav-block--submenu-btn')
  const backButton = document.querySelector('.back-button')


  let isFixed = false
  window.onscroll = function () {
    const currentPosition = window.scrollY || document.documentElement.scrollTop
    const header = document.querySelector('.header')
    const navigationSection = document.querySelector('.navigation-section')


    if (currentPosition >= 130 && !isFixed) {
      header.classList.add('fixed')
      navigationSection.classList.add('fixed')
      isFixed = true
    } else if (currentPosition < 130 && isFixed) {
      header.classList.remove('fixed')
      navigationSection.classList.remove('fixed')
      isFixed = false
    }
  }

  mobileNavBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-unvisible')
    mobileNavBtnInner.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
  })

  backButton?.addEventListener('click', () => {
    mobileMenuSubmenu.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
    mobileMenu.classList.remove('mobile-menu-unvisible')
  })

  closeBurgerMenuBtn.addEventListener('click', () => {
    mobileBlocksInnerContent.forEach(content => {
      if (content.classList.contains('mobile-menu__nav-block--submenu__li-nav-showedContent')) {
        content.classList.remove('mobile-menu__nav-block--submenu__li-nav-showedContent')
      }
    })

    if (!mobileMenuSubmenu.classList.contains('mobile-menu__nav-block--submenu--nonDisplayed')) {
      mobileMenuSubmenu.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
      mobileMenu.classList.remove('mobile-menu-unvisible')
    }
    mobileMenu.style.marginBottom = '100px'
  })

  mobileInnerContentBtns.forEach((btn, index) => {
    const svg = btn.querySelector('svg')

    btn.addEventListener('click', () => {
      mobileBlocksInnerContent.forEach((content, contentIndex) => {
        if (contentIndex === index) {
          if (content.classList.contains('mobile-menu__nav-block--submenu__li-nav-showedContent')) {
            content.classList.remove('mobile-menu__nav-block--submenu__li-nav-showedContent')
            content.classList.add('mobile-menu__nav-block--submenu__li-nav')
            mobileMenu.style.marginBottom = '42px'
            if (svg) {
              svg.style.transform = 'rotate(0deg)'
              svg.style.transition = 'transform 0.23s'
            }
          } else {
            content.classList.add('mobile-menu__nav-block--submenu__li-nav-showedContent')
            content.classList.remove('mobile-menu__nav-block--submenu__li-nav')
            // mobileMenu.style.marginBottom = '-262px'
            if (svg) {
              svg.style.transform = 'rotate(180deg)'
              svg.style.transition = 'transform 0.23s'
            }
          }
        } else {
          content.classList.remove('mobile-menu__nav-block--submenu__li-nav-showedContent')
          content.classList.add('mobile-menu__nav-block--submenu__li-nav')
        }
      })
    })
  })

  mainNavListItemSubmenu.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('main-nav-list-item--active')
      mainNav.classList.add('main-nav--non-rounded')
      const subMenu = item.querySelector('.main-nav-list-item__submenu')
      subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
    })

    if (item.classList.contains('main-nav-list-item--active')) {
      mobileMenuNavSubItems.style.display = 'block'
    }

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
