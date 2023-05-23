const addBtn = document.getElementById('add-btn');
const original = document.getElementById('original');
const ourWork = document.getElementById('our-work');
let customerCounter = 4;

addBtn.addEventListener('click', () => {
    // create a new div element
    const newDiv = document.createElement('div');

    // clone the original div and append it to the new div
    const clone = original.cloneNode(true);
    newDiv.appendChild(clone);

    // modify the cloned h3 element
    const h3 = newDiv.querySelector('h3');
    h3.textContent = 'Customer ' + customerCounter++;

    // append the new div to the container
    ourWork.appendChild(newDiv);
});


const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
    // scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


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

const  searchInput = document.querySelector('.search-input-div');
const  searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
  });