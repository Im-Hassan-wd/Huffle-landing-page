// reference from the DOM
const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navigationBar.classList.toggle('active');

    if(navigationBar.classList.contains('active')) {
        hamburger.src = './icons/close.svg';
    } else {  
        hamburger.src = './icons/hamburger.svg';
    }
});