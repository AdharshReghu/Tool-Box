const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
console.log(navbarLinks);
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('activeNav');
})
