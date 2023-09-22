window.addEventListener('DOMContentLoaded', () => {
  const overlayEl = document.querySelector('.overlay');

  const popupEl = document.querySelector('.popup');

  const closePopupBtns = document.querySelectorAll('.popup__close-btn');
  const togglePopupBtns = document.querySelectorAll('#togglePopup');

  const closePopupByClickOnEsc = (e) => {
    if (e.key === 'Escape') {
      document.body.classList.remove('no-scroll');
      overlayEl.classList.remove('overlay--active');
      popupEl.classList.remove('popup--active');
    }
  };

  const closePopupByClickOnOverlay = (e) => {
    if (e.target === overlayEl) {
      document.body.classList.remove('no-scroll');
      overlayEl.classList.remove('overlay--active');
      popupEl.classList.remove('popup--active');
    }
  };

  closePopupBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.removeEventListener('click', closePopupByClickOnOverlay);
      window.removeEventListener('keydown', closePopupByClickOnEsc);
      document.body.classList.remove('no-scroll');
      overlayEl.classList.remove('overlay--active');
      popupEl.classList.remove('popup--active');
    });
  });

  togglePopupBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.addEventListener('click', closePopupByClickOnOverlay);
      window.addEventListener('keydown', closePopupByClickOnEsc);
      document.body.classList.add('no-scroll');
      overlayEl.classList.add('overlay--active');
      popupEl.classList.add('popup--active');
    });
  });
});
