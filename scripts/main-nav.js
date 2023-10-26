window.addEventListener('DOMContentLoaded', () => {
  const mainNavListItemSubmenu = document.querySelectorAll('.main-nav-list-item--submenu')
  const mainNav = document.querySelector('.main-nav')

  let previousPosition =
    window.pageYOffset || document.documentElement.scrollTop

  const mobileMenu = document.querySelector('.mobile-menu__nav')
  const mobileNavBtn = document.querySelector('.mobile-menu__nav-block--submenu--btn')
  const mobileNavBtnInner = document.querySelector('.mobile-menu__nav-block--submenu--nonDisplayed')
  const mobileNavBtnInnerBlocks = document.querySelectorAll('.mobile-menu__nav-block--submenu__li')
  const mobileBlocksInnerContent = document.querySelectorAll('.mobile-menu__nav-block--submenu__li-nav')
  // const mobileBlocksInnerContentShowed = document.querySelectorAll('.mobile-menu__nav-block--submenu__li-nav-showedContent')
  const mobileInnerContentBtns = document.querySelectorAll('.mobile-menu__nav-block--submenu-btn')

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

  mobileNavBtn.addEventListener('click', () => {
    mobileMenu.style.visibility = 'hidden'
    mobileMenu.style.opacity = 0
    mobileMenu.style.marginBottom = '42px'
    mobileNavBtnInner.classList.toggle('mobile-menu__nav-block--submenu--nonDisplayed')
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
            mobileMenu.style.marginBottom = '-262px'
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
