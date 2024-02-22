import { countries } from "./countryName.js";
let blank = document.querySelector(".blank");
let inputBox = document.getElementById("input");
let chancesDiv = document.getElementById("mistakes");
let guessWord;
let guessWordLength;
let userWord;
let correctLetter;
let blockArray = new Array();
let exist = false;
let chance = 10;

//defining functions
function getword() {
  let num = getRandomNumer(countries.length); //countries.length = 195
  guessWord = countries[num].toLowerCase();
  guessWordLength = guessWord.length;
  blockArray.length = guessWordLength;
  console.log(guessWord);
}

function getRandomNumer(max) {
  return Math.floor(Math.random() * max);
}

function createBlanks() {
  blank.innerHTML = "";
  for (let i = 0; i < blockArray.length; i++) {
    if (guessWord[i] == " ") {
      blockArray[i] = " ";
      blank.innerHTML += blockArray[i];
    } else {
      blockArray[i] = "_";
      blank.innerHTML += blockArray[i];
    }
  }
}

function checkletter() {
  for (let i = 0; i < userWord.length; i++) {
    for (let j = 0; j < guessWordLength; j++) {
      if (userWord[i] == guessWord[j]) {
        exist = true;
        correctLetter = userWord[i];
        adjustBlock();
      }
    }
  }
  if (!exist) {
    chance--;
    chancesDiv.innerHTML = `chances left ${chance}`;
    gameOver();
  }
  updateBlanks();
}

function adjustBlock() {
  for (let i = 0; i < guessWordLength; i++) {
    if (guessWord[i] == correctLetter) {
      blockArray[i] = correctLetter;
    }
  }
}

function updateBlanks() {
  blank.innerHTML = "";
  for (let i = 0; i < blockArray.length; i++) {
    blank.innerHTML += blockArray[i];
  }
  checkWin();
}

//event handler
inputBox.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    userWord = inputBox.value.toLowerCase();
    userWord = userWord.toLowerCase();
    if (userWord.length != 1) {
      inputBox.placeholder =
        "invalid input.please only use one letter at a time";
    } else {
      inputBox.placeholder = "guess country name";
      checkletter();
    }
    inputBox.value = "";
  }
});

function checkWin() {
  if (guessWord == blockArray.join("")) {
    console.log("winner");
  }
}

function gameOver() {
  if (chance == 0) {
    console.log("gameOver");
  }
}

//calling function
getword();
createBlanks();
