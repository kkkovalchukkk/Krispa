window.addEventListener('DOMContentLoaded', () => {
  const winSectionSwiper = new Swiper('.win-section__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      568: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.win-section__swiper-navigation-right',
      prevEl: '.win-section__swiper-navigation-left',
    },
  });
  const reviewSectionSwiper = new Swiper('.reviews-section__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews-section__swiper-navigation-right',
      prevEl: '.reviews-section__swiper-navigation-left',
    },
  });
  const teamSectionSwiper = new Swiper('.team-section__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.team-section__swiper-navigation-right',
      prevEl: '.team-section__swiper-navigation-left',
    },
  });
  const materialsSectionSwiper = new Swiper('.materials-section__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.materials-section__swiper-navigation-right',
      prevEl: '.materials-section__swiper-navigation-left',
    },
  });
});
