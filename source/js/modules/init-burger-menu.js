const header = document.querySelector('.header');
const breakpoint = window.matchMedia('(min-width:768px)');

const initBurgerMenu = () => {
  if (!header) {
    return;
  }

  const menuNav = header.querySelector('.main-nav');
  const menuToggle = header.querySelector('.menu-toggle');

  const returnHeightAuto = () => {
    if (menuNav.style.height !== '0px') {
      menuNav.style.setProperty('height', 'auto');
    }
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', false);
    header.classList.remove('is-open-menu');
    menuNav.style.setProperty('height', '0');
    window.scrollLock.enableScrolling();
  };

  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', true);
    const height = menuNav.scrollHeight;
    menuNav.style.setProperty('height', `${height}px`);
    header.classList.add('is-open-menu');
    window.scrollLock.disableScrolling();
  };

  const clickOnMenu = () => {
    if (menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuNav.removeEventListener('transitionend', returnHeightAuto);
      }
      menuNav.style.setProperty('height', 'auto');
    } else {
      menuNav.style.setProperty('height', '0');
      menuToggle.addEventListener('click', clickOnMenu);
      menuNav.addEventListener('transitionend', returnHeightAuto);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initBurgerMenu};
