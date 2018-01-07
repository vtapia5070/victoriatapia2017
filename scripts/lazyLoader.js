/**
 * This file lazy loads assets for quicker page load.
 */

// Declare variables here. 
let imageContainerEl;

// initialize - invoke all methods here.
const init = () => {
    
    // assign references here.
    imageContainerEl = document.querySelector('.left-image');
    console.log('init!', imageContainerEl);

    addEventListeners();

};

// callback to lazy load.
const uploadImage = () => {

    // replace splash image.
    imageContainerEl.style.backgroundImage = 'url("images/splash_image.jpg")';

};

// register event listeners here. 
const addEventListeners = () => {

    window.onLoad = uploadImage();

};

init();
