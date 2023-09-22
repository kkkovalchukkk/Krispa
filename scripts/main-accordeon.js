window.addEventListener('DOMContentLoaded', () => {
  const accordeonsEls = document.querySelectorAll('.accordeon');

  accordeonsEls.forEach((acc) => {
    acc.addEventListener('click', () => {
      const content = acc.querySelector('.accordeon__content');
      if (acc.classList.contains('accordeon--active')) {
        acc.classList.remove('accordeon--active');
        content.style.maxHeight = '0';
      } else {
        acc.classList.add('accordeon--active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
