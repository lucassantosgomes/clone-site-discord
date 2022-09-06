const navigartionMenu = document.getElementById('navigation__menu');
const navivigationRight = document.getElementById('navigation__right');
const backdrop = document.getElementById('backdrop');
const closeNavigationRight = document.getElementById('close__navigation__right');
const body = document.getElementById('body');
navigartionMenu.addEventListener('click', () => {
  navivigationRight.style.display = 'flex';
  backdrop.style.display = 'block';
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
});
closeNavigationRight.addEventListener('click', () => {
  navivigationRight.style.display = 'none';
  backdrop.style.display = 'none';
  body.style.height = 'auto';
  body.style.overflow = 'auto';
});
