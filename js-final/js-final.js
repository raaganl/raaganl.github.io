let number = document.getElementById("currentPhone");
let less = document.querySelector("#less").addEventListener('click',function(){updateNumber("less")});
let restart = document.querySelector("#restart").addEventListener('click',function(){updateNumber("restart")});
let greater = document.querySelector("#greater").addEventListener('click',function(){updateNumber("greater")});
let yes = document.querySelector("#yes").addEventListener('click',function(){updateNumber("yes")});
let currnum = 0;
let numberSent = false;
let numberRange = [1000000000,10000000000];
let count = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let countLimit = randomNumber(35,60);
function inital(){
    numberRange = [1000000000,10000000000];
    numberSent = false;
    currnum = randomNumber(numberRange[0],numberRange[1]);
    number.textContent = currnum;
    number.style.fontSize = "30px"
    count = 0;
    countLimit = randomNumber(35,60);
    
}

function updateNumber(buttonClicked){
    count+=1;
    if(count >= countLimit){
        number.textContent = "I give up! Try Again.";
        numberSent = true;
    }
    if(buttonClicked == "less" && numberSent == false){
        numberRange[0] = currnum;
        currnum = randomNumber(numberRange[0],numberRange[1]);
        number.textContent = currnum;
    }
    if(buttonClicked == "greater" && numberSent == false){
        numberRange[1] = currnum;
        currnum = randomNumber(numberRange[0],numberRange[1]);
        number.textContent = currnum;
    }
    if(buttonClicked == "yes" && count<countLimit){
        number.textContent = "Phone number submitted!";
        numberSent = true;
    }
    if(buttonClicked == "restart"){
        inital();
    }
}
inital();