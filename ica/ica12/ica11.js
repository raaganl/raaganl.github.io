const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const othrBtn = document.querySelector('#js-tweet').addEventListener('click',);

var endPoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote(){
    try{
        const response = await fetch(endPoint); 
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);

    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question){
    const questionText = document.querySelector('#js-quote-text');
    questionText.textContent = question;

}

async function getAnswer(answer){
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}
