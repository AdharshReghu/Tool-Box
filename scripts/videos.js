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

const api_key = '36981079-6cd34e73acd18301edddeec1d';
const url = 'https://pixabay.com/api/videos/';

const input = document.querySelector('input');
const searchButton = document.querySelector('.search');
searchButton.addEventListener('click',getVideo) 
const nextButton = document.querySelector('.next'); 
const previousButton = document.querySelector('.previous');
const videoContainer = document.querySelector('.videoContainer');
const videoResultBox = document.querySelector('.videoResultBox');

const videos = document.querySelector('.videos')
var i = 0;

var videoArray = undefined; 

async function getVideo(e){
    e.preventDefault();
    let inputValue = input.value;
    if(!inputValue)
    {
        console.log('input value is empty')
        videoResultBox.classList.remove('videoActive');
        return;
    }
    videoResultBox.classList.add('videoActive');
    const response = await fetch(`${url}?key=${api_key}&q=${inputValue}`)
    const data = await response.json();
    videoArray = data.hits;
    const numberOfVideos =  videoArray.length;
    let src =  videoArray[0].videos.medium.url;
    console.log(src);
    let source = document.createElement('source');
    source.src= src;
    source.type='video/mp4';
    source.class = 'video';
    console.log(source);
    videos.append(source); 
}
console.log('hello');

input.addEventListener('keyup',()=>{
    if(!input.value)
    {
        videoResultBox.classList.remove('videoActive');
    }
})
