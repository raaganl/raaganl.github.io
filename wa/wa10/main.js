const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 30 fahrenheit outside, and :insertx: was going out to a Halloween party. When they got to :inserty: all seemed well, and the party was going great! That is, until :insertz:. Bob heard a commotion and went over to where people were crowing around. At first it was entertaining, but they decided to leave after :insertx: knocked over a 300 pound statue.";
var insertX = ["Willy Wonka", "Fantastic Mr. Fox", "Matilda"];
var insertY = ["the Frat", "the house","the sewer"];
var insertZ = ["the oompa loompas crashed the party", "Boggis, Bunce, and Bean showed up and ruined the vibe", "Trunchbull started doing the worm"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((30-32)*(5/9)) + " centigrade";
    newStory = newStory.replace('30 fahrenheit',temperature);
    newStory = newStory.replace('300 pound', weight);
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}