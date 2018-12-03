/**
 * This file lazy loads assets for quicker page load.
 */

// Declare variables here. 
let imageContainerEl;

// initialize - invoke all methods here.
const init = () => {
    
    // assign references here.
    imageContainerEl = document.querySelector('.splash-image');

    addEventListeners();

};

// callback to lazy load.
const uploadImage = () => {

    // replace splash image.
    imageContainerEl.src = 'images/omar-rodriguez-1192626-unsplash.jpg';

};

// register event listeners here. 
const addEventListeners = () => {

    window.onLoad = uploadImage();

};

init();
