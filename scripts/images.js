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
const url = 'https://pixabay.com/api/';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const imageContainer = document.querySelector('.imageContainer');
const imageResultBox =  document.querySelector('.imageResultBox')


btn.addEventListener('click',getImages);

async function getImages(e){
    e.preventDefault();
    imageContainer.replaceChildren();
    const searchValue = input.value;
    if(!searchValue)
    {
        imageResultBox.classList.remove('imageActive');
        return;
    }
    fetch(`${url}?key=${api_key}&q=${searchValue}&per_page=50`).then((Response)=>{
        return Response.json();
    }).then((data)=>{
        const imageArray = data.hits;
        let i = 0;
        if(imageArray.length==0)
        {
            return;
        }
        imageResultBox.classList.add('imageActive');
        while(i<imageArray.length)
        {
            let src = imageArray[i]["previewURL"]; 
            let img = document.createElement('img');
            img.src = src;
            img.class= 'images';
            imageContainer.append(img);
            i++;
        }
    }).catch((e)=>{
        console.log(e + " error");
    })

}

input.addEventListener('keyup',()=>{
    if(!input.value)
    {
        imageResultBox.classList.remove('imageActive');
        imageContainer.replaceChildren();
    }
})





