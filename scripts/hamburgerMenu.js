/**
 * This file implements the hamburger menu animation.
 */

// Declare variables here. 
let hamburgerMenuEl;
let isMenuOpen;

// initialize - invoke all methods here.
const initHamburgerMenu = () => {

  // assign references here.
  hamburgerMenuButton = document.querySelector('.hamburger-menu');
  isMenuOpen = false;
  addEventListeners();

};

const animateMenu = () => {
  console.log('button clicked!');
};

const renderNavList = () => {
  document.querySelector('.nav');
}

// register event listeners here. 
const addEventListeners = () => {
  hamburgerMenuButton.onclick = animateMenu;
};

initHamburgerMenu();
