const hamburger = document.querySelector('#hamburger');
const hamburgerLinks = document.querySelector('#hamburger-links');
const hamburgerClose = document.querySelector('#hamburger-close');

hamburger.addEventListener('click', openHamburgerMenu);
function openHamburgerMenu() {

  hamburger.style.display = 'none';
  hamburgerLinks.style.display = 'flex';
  hamburgerClose.style.display = 'block';
}

hamburgerClose.addEventListener('click', closeHamburgerMenu);
function closeHamburgerMenu() {

  hamburger.style.display = 'block';
  hamburgerLinks.style.display = 'none';
  hamburgerClose.style.display = 'none';
}
