const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('activeNav');
})

const contentBody = document.querySelector('.content');
const logoButton = document.querySelector('.logo');
console.log(logoButton);
logoButton.addEventListener('click',()=>{
    contentBody.classList.toggle('darkmode');
})