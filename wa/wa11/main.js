const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ['CUBoulder.jpg','Telluride.jpg','mountains.jpg','Durango.jpg','Aspen.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['Snowy University of Colorado', 'Telluride Colorado', 'Just the mountains', 'Durango Colorado Train','Aspen Colorado'];

/* Looping through images */
for(var k = 0; k < imgArr.length; k++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgArr[k]}`);
    newImage.setAttribute('alt', altText[k]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src',newImage.getAttribute('src'));
        displayedImage.setAttribute('alt',newImage.getAttribute('alt'));
        });
    }
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
    if (btn.getAttribute('class') === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,.5)';

    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
