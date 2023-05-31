//script for drop-down of hamburger menu in small screens
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('activeNav');
})

//script for changing background color of content section of the QR generator page 
const contentBody = document.querySelector('body');
const logoButton = document.querySelector('.logo');
logoButton.addEventListener('click',()=>{
    contentBody.classList.toggle('darkmode');
})
const key = 'LIVDSRZULELA'
let limit = 20; //20 is still the default value as mentioned in the tenor api documentation
 