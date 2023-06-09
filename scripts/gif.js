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
const url = 'https://g.tenor.com/v1/search?'



const input = document.querySelector('form input');
const searchButton = document.querySelector('button');
const gifContainer = document.querySelector('.gifContainer')
const gifResultBox = document.querySelector('.gifResultBox');
searchButton.addEventListener('click',getGifs)


async function getGifs(e){
    e.preventDefault();
    gifContainer.replaceChildren();
    const term = input.value;
    if(!term)
    {
        gifResultBox.classList.remove('gifActive')
        return;
    }
    const response =  await fetch(`${url}q=${term}&key=${key}&limit=${limit}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        const gifArrayData = data.results
        let i = 0;
        if(gifArrayData.length===0)
        {
            gifResultBox.classList.remove('gifActive');
            return;
        }
        gifResultBox.classList.add('gifActive');
        while(i<gifArrayData.length)
        {
            let src = gifArrayData[i]["media"][0]["tinygif"]["url"]; 
            let img = document.createElement('img');
            img.src = src;
            img.class= 'gifs'
            gifContainer.append(img);
            i++;
        }
    }).catch((e)=>
    {
        console.log(e + ' error occured');
        gifResultBox.classList.add('gifActive');
    })
}

input.addEventListener('keyup',()=>{
    if(!input.value)
    {
        gifResultBox.classList.remove('gifActive');
        gifContainer.replaceChildren();
    }
})



