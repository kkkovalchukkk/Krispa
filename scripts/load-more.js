window.addEventListener('DOMContentLoaded', () => {
  const tabListEl = document.querySelector('.our-team-section__tab-list');

  const loadMoreBtnEls = document.querySelectorAll(
    '.our-team-section__load-more-btn'
  );
  const cardsListsEls = document.querySelectorAll(
    '.our-team-section__card-list'
  );

  loadMoreBtnEls.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (btn.textContent.trim() == 'загрузить всех') {
        btn.textContent = 'скрыть';
        cardsListsEls[idx].style.maxHeight =
          cardsListsEls[idx].scrollHeight + 'px';
      } else {
        btn.textContent = 'загрузить всех';
        cardsListsEls[idx].style.maxHeight = '2060px';
        tabListEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
