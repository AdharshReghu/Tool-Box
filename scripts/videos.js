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

const nextButton = document.querySelector('.next'); 
const previousButton = document.querySelector('.previous');
const videoContainer = document.querySelector('.videoContainer');
const videoResultBox = document.querySelector('.videoResultBox');

const videos = document.querySelector('.videos')
var i = 0;
var numberOfVideos = 0;

var videoArray = undefined; 

searchButton.addEventListener('click',getVideo) 

async function getVideo(e){
    e.preventDefault();
    let inputValue = input.value;
    i=0;
    numberOfVideos=0;
    videoArray=undefined;
    if(!inputValue)
    {
        console.log('input value is empty')
        videoResultBox.classList.remove('videoActive');
        return;
    }
    const response = await fetch(`${url}?key=${api_key}&q=${inputValue}`)
    const data = await response.json();
    videoArray = data.hits;
    numberOfVideos =  videoArray.length;
    if(numberOfVideos===0)
    {
        videoResultBox.classList.remove('videoActive');
        return;
    }
    previousButton.disabled=true;
    nextButton.disabled=false;
    previousButton.classList.add('disabledButtonColor');
    if(numberOfVideos===1)
    {
        nextButton.disabled=true;
        nextButton.classList.add('disabledButtonColor');
    }
    videoResultBox.classList.add('videoActive');
    let src =  videoArray[0].videos.medium.url;
    let source = document.createElement('source');
    source.src= src;
    source.type='video/mp4';
    source.class = 'video';
    videos.replaceChildren();
    videos.append(source);
    videos.load();
}

input.addEventListener('keyup',()=>{
    if(!input.value)
    {
        videoResultBox.classList.remove('videoActive');
    }
})

nextButton.addEventListener('click',nextVideo);

function nextVideo(){
    
    let source = document.createElement('source');
    console.log(i);
    console.log(numberOfVideos);
    videos.replaceChildren();
    if(i<numberOfVideos-1)
    {
        previousButton.disabled=false;
        previousButton.classList.remove('disabledButtonColor');
        i++;
        source.src=videoArray[i].videos.medium.url;
        source.type='video/mp4';
        source.class = 'video';
        console.log(source);
        videos.append(source);
        videos.load();
        if(i=numberOfVideos-1)
        {
            nextButton.disabled=true;
            nextButton.classList.add('disabledButtonColor');
        }
    }

}

previousButton.addEventListener('click',prevVideo);

function prevVideo(){
   
    let source = document.createElement('source');
    console.log(i);
    console.log(numberOfVideos);
    videos.replaceChildren();
    if(i>0)
    {
        nextButton.disabled=false;
        nextButton.classList.remove('disabledButtonColor');
        i--;
        source.src=videoArray[i].videos.medium.url;
        source.type='video/mp4';
        source.class = 'video';
        console.log(source);
        videos.append(source);
        videos.load();
        if(i<=0)
        {
            previousButton.disabled=true;
            previousButton.classList.add('disabledButtonColor');
        }
    }
}