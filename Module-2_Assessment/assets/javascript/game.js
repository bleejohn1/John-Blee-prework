
    const maximumTries = 10;
    lettersUserHasGuessed = [];
    wordBeingGuessed = [];
    var numGuessesLeft = maximumTries;
    var numberOfWins = 3;
    var currentLetterBeingGuessed = "";
    winFlag = false;
    LoseFlag = false;
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


const winsIH1 = document.querySelector('#winsI');
const currentWordIH1 = document.querySelector('#currentWordI');
const guessesLeftIH1 = document.querySelector('#guessesLeftI');
const lettersGuessedIH1 = document.querySelector('#lettersGuessedI');

//winsIH1.innerHTML = ('Hello');




function practiceF(){
    console.log(2);
}

document.addEventListener('keyup', showWins);

function initializeValues()
{
    console.log(2); //testing
    lettersUserHasGuessed = [];
    wordBeingGuessed = [];
    numGuessesLeft = maximumTries;
    winFlag = false;
    LoseFlag = false;
    currentLetterBeingGuessed = []; // randomly take a value from wordsToGuessFrom array

}


function playGame(){

wordBeingGuessed = wordsToGuessFrom[wordsToGuessFrom.length];
// wait for input and then call "checkGuess"
}


function checkGuess(){
    //recognize keystroke
    //check if entered key is in the array of the correct word
        //if yes call function "correct Guess"
        //if no, call function "incorrect guess"
    
        
}

function correctGuess(){
    //reveal letter
    // then call function "check if won"
}

function incorrectGuess(){
    //decrease guesses left counter
    //display incorrect letter in the letters already guessed array
    //call function "check if lost"
}

function checkIfWon(){
    //check if number of letters left unrevealed is 0;
    //if yes, call win function/change win flag
    //if no, return to function play game
}

function win(){
    //increase win counter
    //call function initialize

}

function checkIfLost(){
    //check if guesses left counter === 0
    //if yes, change fase flag, call initialize function
    //if no return to play game fucntion
}


