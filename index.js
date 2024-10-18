let portfolioLinks = ["herd.html"]

let cardElements = document.querySelectorAll(".card");
for(let i = 0; i < cardElements.length; i++){
    cardElements[i].addEventListener('click', function(){
        window.location.href = portfolioLinks[i];
    })
}
