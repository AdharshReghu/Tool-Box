//script for drop-down of hamburger menu in small screens
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('activeNav');
})


//script for changing background color of content section of the QR generator page 
const contentBody = document.querySelector('body');
const logoButton = document.querySelector('.logo');
console.log(logoButton);
logoButton.addEventListener('click',()=>{
    contentBody.classList.toggle('darkmode');
})

//qr code script
const container = document.querySelector('.container');
const btn = container.querySelector('button');
const input = container.querySelector('form input');
const image = container.querySelector('.Qr img');
const qrsize='200x200'
const url = 'https://api.qrserver.com/v1/create-qr-code/';
async function getImage (e){
    e.preventDefault();
    const inputValue = input.value;
    if(!inputValue){
        return
    }
    btn.innerText='Generating QR Code....';
    const response =  await fetch(`${url}?data=${inputValue}&size=${qrsize}`);
    const source = response.url
    image.src= source;
    
    image.addEventListener('load',()=>{
        btn.innerText='Generate QR Code';
        container.classList.add('active')
    })
}
btn.addEventListener('click',getImage);

input.addEventListener('keyup',()=>{
    if(!input.value){
        container.classList.remove('active');
    }
})