const header = document.querySelector('.header');
const breakpoint = window.matchMedia('(min-width:768px)');

const initBurgerMenu = () => {
  if (!header) {
    return;
  }

  const menuNav = header.querySelector('.main-nav');
  const menuToggle = header.querySelector('.menu-toggle');

  const closeMenu = () => {
    menuToggle.ariaPressed = 'false';
    header.classList.remove('is-open-menu');
    //header.classList.add('is-closed');
    menuNav.style.setProperty('height', '0');
    //menuNav.removeEventListener('click', clickOnList);
    //window.scrollLock.enableScrolling();
  };
  /*
  const clickOnList = (evt) => {
    if (evt.target.closest('a')) {
      closeMenu();
    }
  };
  */
  const openMenu = () => {
    menuToggle.ariaPressed = 'true';
    //header.classList.remove('is-closed');

    const height = menuNav.scrollHeight;
    menuNav.style.setProperty('height', height + 'px');
    header.classList.add('is-open-menu');

    //menuNav.addEventListener('click', clickOnList);
    //window.scrollLock.disableScrolling();
  };

  const clickOnMenu = () => {
    if (menuToggle.ariaPressed === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (menuToggle.ariaPressed === 'true') {
        closeMenu();
      }
      menuNav.style.setProperty('height', 'auto');
    } else {
      menuToggle.addEventListener('click', clickOnMenu);
      menuNav.style.setProperty('height', '0');
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initBurgerMenu};
