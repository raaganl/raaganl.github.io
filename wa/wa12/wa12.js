const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getColor);

var endPoint = 'https://x-colors.yurace.pro/api/random';

async function getColor(){
    try{
        const response = await fetch(endPoint); 
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayColor(json['hex']);
        changeApp(json['hex']);

    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new color');
    }
}
function changeApp(color){
    document.body.style.backgroundColor = color;
}
function displayColor(color){
    const questionText = document.querySelector('#js-quote-text');
    questionText.textContent = "Your Random Color is: " + color;
    

}
