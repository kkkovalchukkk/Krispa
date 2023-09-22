document.addEventListener('DOMContentLoaded', () => {
  const ACTIVE_TAB_CLASSNAME = 'tab--active';
  const ACTIVE_SERVICES_PAGE_CLASSNAME = 'services-section__page--active';

  const servicesTabsEls = document.querySelectorAll('.services-section__tab');
  const servicesPages = document.querySelectorAll('.services-section__page');

  const resetServicesSectionTabs = () => {
    servicesTabsEls.forEach((tab) =>
      tab.classList.remove(ACTIVE_TAB_CLASSNAME)
    );
  };

  const resetServicesPages = () => {
    servicesPages.forEach((page) =>
      page.classList.remove(ACTIVE_SERVICES_PAGE_CLASSNAME)
    );
  };

  const makeActiveTab = (tab) => tab.classList.add(ACTIVE_TAB_CLASSNAME);

  const makeActivePage = (page) =>
    page.classList.add(ACTIVE_SERVICES_PAGE_CLASSNAME);

  servicesTabsEls.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      resetServicesSectionTabs();
      resetServicesPages();
      makeActiveTab(tab);
      makeActivePage(servicesPages[idx]);
    });
  });

  servicesPages.forEach((page) => {
    const servicesSectionServicesListItems = page.querySelectorAll(
      '.services-section__services-list-item'
    );
    const servicesSectionPageBoxLists = page.querySelectorAll(
      '.services-section__page-box-list'
    );

    servicesSectionServicesListItems.forEach((listItem, idx) => {
      listItem.addEventListener('click', () => {
        servicesSectionServicesListItems.forEach((li) =>
          li.classList.remove('services-section__services-list-item--active')
        );
        servicesSectionPageBoxLists.forEach((boxList) =>
          boxList.classList.remove('services-section__page-box-list--active')
        );
        listItem.classList.add('services-section__services-list-item--active');
        console.log(servicesSectionPageBoxLists[idx]);

        servicesSectionPageBoxLists[idx].classList.add(
          'services-section__page-box-list--active'
        );
      });
    });
  });
});
