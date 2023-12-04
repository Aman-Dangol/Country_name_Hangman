import { countries } from "./countryName.js";
let blank = document.querySelector(".blank");
let inputBox = document.getElementById("input");
let guessWord;
let guessWordLength;
let userWord;

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
      blank.innerHTML += "_ ";
    }
  }
}
function show(){
    blank.innerHTML= guessWord;
}


function checkWord() {
  if (userWord.toLowerCase() == guessWord.toLowerCase()) {
    show()
    console.log("you won!!");
  }
  // for (let i = 0; i < guessWordLength; i++) {
  //     for (let j = 0; j < userWord.length; j++) {
  //         if(i==j){
  //             console.log(userWord[j]);
  //         }
  //     }
}

//calling function
getword();
createBlanks();

//event handler
inputBox.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    userWord = inputBox.value;
    checkWord();
  }
});
