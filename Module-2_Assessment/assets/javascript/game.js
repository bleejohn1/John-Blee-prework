//function initializeValues(){
    const maximumTries = 10;
    lettersUserHasGuessed = [];
    wordBeingGuessed = [];
    var numGuessesLeft = maximumTries;
    var numberOfWins = 3;
    var currentLetter = "";
    wordsToGuessFrom = ["Washington",
    "Adams",
    "Jefferson",
    "Madison",
    "Monroe",
    "Jackson",
    "Tyler",
    "Polk",
    "Taylor",
    "Fillmore",
    "Pierce"]
//}

function showWins(numberOfWins){
    console.log(numberOfWins);
    return numberOfWins;
}

const winsIH1 = document.querySelector('#winsI');
const currentWordIH1 = document.querySelector('#currentWordI');
const guessesLeftIH1 = document.querySelector('#guessesLeftI');
const lettersGuessedIH1 = document.querySelector('#lettersGuessedI');

