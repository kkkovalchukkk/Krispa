window.addEventListener('DOMContentLoaded', () => {
  const accordeonsEls = document.querySelectorAll('.accordeon');
  const innerAccordeonEls = document.querySelectorAll(
    '.accordeon__inner-accordeon'
  );

  const categorySidebarEl = document.querySelector(
    '.category-section__sidebar'
  );
  const activeAccordeonEl =
    categorySidebarEl?.querySelector('.accordeon--active');
  const activeAccordeonContentEl = activeAccordeonEl?.querySelector(
    '.accordeon__content'
  );
  const activeInnerAccordeonEl = activeAccordeonContentEl?.querySelector(
    '.accordeon__inner-accordeon--active'
  );
  const InnerAccordeonContentEl = activeInnerAccordeonEl?.querySelector(
    '.accordeon__inner-accordeon-content'
  );

  accordeonsEls.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      const content = acc.querySelector('.accordeon__content');
      const isActive = acc.classList.contains('accordeon--active');

      if (isActive) {
        acc.classList.remove('accordeon--active');
        content.style.maxHeight = '0';
      } else {
        acc.classList.add('accordeon--active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  innerAccordeonEls.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      const content = acc.querySelector('.accordeon__inner-accordeon-content');
      const isActive = acc.classList.contains(
        'accordeon__inner-accordeon--active'
      );
      const path = event.path || event.composedPath();
      const parentAccordeon = path.find((el) =>
        el.classList.contains('accordeon')
      );
      const parentAccordeonContent = parentAccordeon.querySelector(
        '.accordeon__content'
      );

      if (isActive) {
        acc.classList.remove('accordeon__inner-accordeon--active');
        content.style.maxHeight = '0';
      } else {
        acc.classList.add('accordeon__inner-accordeon--active');
        content.style.maxHeight = content.scrollHeight + 'px';

        parentAccordeonContent.style.maxHeight =
          parentAccordeonContent.scrollHeight +
          content.scrollHeight +
          100 +
          'px';
      }
    });
  });
  activeAccordeonContentEl &&
    (activeAccordeonContentEl.style.maxHeight =
      activeAccordeonContentEl.scrollHeight + 500 + 'px');

  InnerAccordeonContentEl &&
    (InnerAccordeonContentEl.style.maxHeight =
      InnerAccordeonContentEl.scrollHeight + 500 + 'px');
});
