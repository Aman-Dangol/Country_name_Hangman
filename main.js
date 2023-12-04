import { countries } from "./countryName.js";
let blank = document.querySelector(".blank");
let inputBox = document.getElementById('input');
let guessWord;
let guessWordLength;

//defining functions
function getword() {
  let num = getRandomNumer(countries.length); //countries.length = 195
  // guessWord = countries[num];
  guessWord = "el salvador";
  guessWordLength = guessWord.length;
  console.log(guessWord + " " + guessWordLength);
}
function getRandomNumer(max) {
  return Math.floor(Math.random() * max);
}
function createBlanks() {
  for (let i = 0; i < guessWordLength; i++) {
    if (guessWord[i] == " ") {
      console.log("space");
      blank.innerHTML += "  ";
    } else {
      blank.innerHTML += "_  ";
    }
  }
}

//calling function
getword();
createBlanks();

//event handler
inputBox.addEventListener('keydown',(e)=>{
    if(e.key == "Enter"){
        
    }    
})