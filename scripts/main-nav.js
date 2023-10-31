window.addEventListener('DOMContentLoaded', () => {
  const mainNavListItemSubmenu = document.querySelectorAll('.main-nav-list-item--submenu')
  const mainNav = document.querySelector('.main-nav')


  const closeBurgerMenuBtn = document.querySelector('.mobile-menu__close-btn')
  const mobileMenu = document.querySelector('.mobile-menu__nav')
  const mobileMenuFooter = document.querySelector('.mobile-menu__info-list')
  const mobileMenuSubmenu = document.querySelector('.mobile-menu-submenu')
  const mobileNavBtn = document.querySelector('.mobile-menu__nav-block--submenu--btn')
  const mobileNavBtnInner = document.querySelector('.mobile-menu__nav-block--submenu--nonDisplayed')
  const mobileBlocksInnerContent = document.querySelectorAll('.mobile-menu__nav-block--submenu__li-nav')
  const mobileInnerContentBtns = document.querySelectorAll('.mobile-menu__nav-block--submenu-btn')
  const backButton = document.querySelector('.back-button')

  const sidebar = document.querySelector('.sidebar')

  let isFixed = false
  let lastScrollPosition = 0

  window.onscroll = function () {
    const header = document.querySelector('.header')
    const navSection = document.querySelector('.navigation-section')
    let currentPosition = window.scrollY || document.documentElement.scrollTop

    if (currentPosition >= 130 && !isFixed && currentPosition > lastScrollPosition) {
      if (sidebar) {
        sidebar.style.top = '160px'
      }

      header.classList.add('fixed')
      navSection.classList.add('fixed')

      header.style.paddingBottom = header.offsetHeight + 'px'
      isFixed = true
    } else if (currentPosition < 130 && isFixed) {
      if (sidebar) {
        sidebar.style.top = '16px'
      }

      header.classList.remove('fixed')
      navSection.classList.remove('fixed')

      header.style.paddingBottom = ''
      isFixed = false
    }

    lastScrollPosition = currentPosition
  }


  mobileNavBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-unvisible')
    mobileNavBtnInner.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
  })


  backButton?.addEventListener('click', () => {
    mobileMenuSubmenu.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
    mobileMenu.classList.remove('mobile-menu-unvisible')

    mobileBlocksInnerContent.forEach(content => {
      if (content.classList.contains('mobile-menu__nav-block--submenu__li-nav-showedContent')) {
        mobileMenuFooter.classList.remove('mobile-menu__info-list--active')
        content.classList.remove('mobile-menu__nav-block--submenu__li-nav-showedContent')
        content.classList.add('mobile-menu__nav-block--submenu__li-nav')

        mobileInnerContentBtns.forEach(btn => {
          const svg = btn.querySelector('svg')
          if (svg) {
            svg.style.transform = 'rotate(0deg)'
            svg.style.transition = 'transform 0.23s'
          }
        })
      }
    })
  })

  closeBurgerMenuBtn.addEventListener('click', () => {
    mobileBlocksInnerContent.forEach(content => {
      if (content.classList.contains('mobile-menu__nav-block--submenu__li-nav-showedContent')) {
        mobileMenuFooter.classList.remove('mobile-menu__info-list--active')
        content.classList.remove('mobile-menu__nav-block--submenu__li-nav-showedContent')
        content.classList.add('mobile-menu__nav-block--submenu__li-nav')

        mobileInnerContentBtns.forEach(btn => {
          const svg = btn.querySelector('svg')
          if (svg) {
            svg.style.transform = 'rotate(0deg)'
            svg.style.transition = 'transform 0.23s'
          }
        })
      }
    })

    if (!mobileMenuSubmenu.classList.contains('mobile-menu__nav-block--submenu--nonDisplayed')) {
      mobileMenuSubmenu.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
      mobileMenu.classList.remove('mobile-menu-unvisible')
    }
  })


  mobileInnerContentBtns.forEach((btn, index) => {
    const svg = btn.querySelector('svg')

    btn.addEventListener('click', () => {
      mobileBlocksInnerContent.forEach((content, contentIndex) => {
        if (contentIndex === index) {
          if (content.classList.contains('mobile-menu__nav-block--submenu__li-nav-showedContent')) {
            content.classList.remove('mobile-menu__nav-block--submenu__li-nav-showedContent')
            content.classList.add('mobile-menu__nav-block--submenu__li-nav')

            mobileMenuFooter.classList.remove('mobile-menu__info-list--active')
            mobileMenu.style.marginBottom = '42px'

            if (svg) {
              svg.style.transform = 'rotate(0deg)'
              svg.style.transition = 'transform 0.23s'
            }
          } else {
            content.classList.add('mobile-menu__nav-block--submenu__li-nav-showedContent')
            content.classList.remove('mobile-menu__nav-block--submenu__li-nav')

            mobileMenuFooter.classList.add('mobile-menu__info-list--active')

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
