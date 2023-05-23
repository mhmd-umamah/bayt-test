// get the current URL
var currentUrl = window.location.href;

// get all the navigation links
var navLinks = document.getElementsByClassName('head-link');

// loop through the links and add the "active" class to the one with a matching href
for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentUrl) {
    navLinks[i].classList.add('active');
  }
}


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.mobileHeader');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
});