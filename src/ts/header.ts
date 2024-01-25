const body = document.querySelector<HTMLElement>('body');
const button = document.querySelector<HTMLElement>('.header__burger');
const menu = document.querySelector<HTMLElement>('.nav__list');
const nav = document.querySelector<HTMLElement>('.nav');
const header = document.querySelector<HTMLElement>('.header');

const openMenu = () => {
  button?.setAttribute('data-state', 'active');
  menu && (menu.style.display = 'flex');
  body && (body.style.overflow = 'hidden');
};

const closeMenu = () => {
  button?.setAttribute('data-state', '');
  menu && (menu.style.display = 'none');
  body && (body.style.overflow = 'auto');
};

export const handlerClickOfBurger = () => {
  button?.addEventListener('click', () => {

    if (button.getAttribute('data-state') === 'active') {
      closeMenu();
    } else {
      openMenu();
    }
  });
};

const handlerScroll = () => {
  console.log(window.scrollY)
  if(window.scrollY >= 100) {
    nav && (nav.style.position = 'fixed');
    nav && (nav.style.top = '0');
    nav && (nav.style.zIndex = '5');
    nav && (nav.style.boxShadow = '0 4px 15px #7f7979');
    nav && (nav.style.borderRadius = '0 0 15px 15px');
    header && (header.style.paddingTop = '92px');
  } else {
    nav && (nav.style.position = 'static');
    nav && (nav.style.boxShadow = 'none');
    nav && (nav.style.borderRadius = '18px');
    header && (header.style.paddingTop = '7px');
  }
};

const breakpoint = window.matchMedia('(min-width: 1280px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    menu && (menu.style.display = 'flex');
    button?.setAttribute('data-state', '');
    body && (body.style.overflow = 'auto');
    window.addEventListener('scroll', handlerScroll);
    if(window.scrollY >= 100) {
      nav && (nav.style.position = 'fixed');
      nav && (nav.style.top = '0');
      nav && (nav.style.zIndex = '5');
      nav && (nav.style.boxShadow = '0 4px 15px #7f7979');
      nav && (nav.style.borderRadius = '0 0 15px 15px');
      header && (header.style.paddingTop = '92px');
    }
  } else {
    menu && (menu.style.display = 'none');
    header && (header.style.paddingTop = '10px');
    nav && (nav.style.borderRadius = '18px');
    nav && (nav.style.position = 'static');
    window.removeEventListener('scroll', handlerScroll);
  }
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();
