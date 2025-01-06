let portfolioLinks = ["herd.html"]
let uxLinks = ["whiteboard.html", "orion.html"]
let artworkLinks = ["paintings.html","dnd.html"]

let portfolioCards = document.querySelectorAll(".card");
for(let i = 0; i < portfolioCards.length; i++){
    portfolioCards[i].addEventListener('click', function(){
        window.location.href = portfolioLinks[i];
    })
}
let artworkCards = document.querySelectorAll(".card2");
for(let i = 0; i < artworkCards.length; i++){
    artworkCards[i].addEventListener('click', function(){
        window.location.href = artworkLinks[i];
    })
}
let uxCards = document.querySelectorAll(".uxCard");
for(let i = 0; i < uxCards.length; i++){
    uxCards[i].addEventListener('click', function(){
        window.location.href = uxLinks[i];
    })
}

