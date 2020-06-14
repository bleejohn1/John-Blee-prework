
    const maximumNumberTries = 10;
    var lettersUserHasGuessed = [];
    var wordBeingGuessed = [];
    var numGuessesLeft;
    var numberOfWins = 400000;
    var currentLetterBeingGuessed = "";
    var winFlag = false;
    var loseFlag = false;
    var wordsToGuessFrom = ["Washington",
    "Adams",
    "Jefferson",
    "Madison",
    "Monroe",
    "Jackson",
    "Tyler",
    "Polk",
    "Taylor",
    "Fillmore",
    "Pierce"];
//}


winsIH1 = document.querySelector('#winsI');
const currentWordIH1 = document.querySelector('#currentWordI');
const guessesLeftIH1 = document.querySelector('#guessesLeftI');
const lettersGuessedIH1 = document.querySelector('#lettersGuessedI');


// document.addEventListener('keyup', showWins);       //testing to see if keystrokes work

function showWins()
{
    document.getElementById("winsI").innerText = numberOfWins;

}


function initializeValues()
{
    //console.log(2); //testing
    // for testing use; console.log(numberOfWins);
    lettersUserHasGuessed = [];     //console.log(lettersUserHasGuessed);
    wordBeingGuessed = [];          //console.log(wordBeingGuessed);
    numGuessesLeft = maximumNumberTries;  //console.log(numGuessesLeft);
    winFlag = false;              //  console.log(winFlag);
    loseFlag = false;             //  console.log(loseFlag);
    currentLetterBeingGuessed = [];// console.log(currentLetterBeingGuessed); 
        // randomly take a value from wordsToGuessFrom array
    console.log("initializeValues ran properly");   
}

function showValues(){      //      function for testing purposes to see values at any point in the program this is called
    document.getElementById("winsI").innerText = numberOfWins;
    document.getElementById("currentWordI").innerText = wordBeingGuessed;
    document.getElementById("guessesLeftI").innerText = numGuessesLeft;
    document.getElementById("lettersGuessedI").innerText = lettersUserHasGuessed;
    console.log(maximumNumberTries);
    console.log(numberOfWins);
    console.log(currentLetterBeingGuessed);
    console.log(winFlag);
    console.log(loseFlag);
    console.log(wordsToGuessFrom);
    console.log("showValues ran properly");
}


wordBeingGuessed = wordsToGuessFrom[wordsToGuessFrom.length];
// wait for input and then call "checkGuess"



function checkGuess(){
    //recognize keystroke
    //check if entered key is in the array of the correct word
        //if yes call function "correct Guess"
        //if no, call function "incorrect guess"
    
        
}

function correctGuess(){
    //reveal letter     
        document.getElementById("winsIH1").innerText = wins;
    // then call function "check if won"
}

function incorrectGuess(){
    //decrease guesses left counter     document.getElementById("totalWins").innerText = wins;
    //display incorrect letter in the letters already guessed array     document.getElementById("totalWins").innerText = wins;
    //call function "check if lost"
}

function checkIfWon(){
    //check if number of letters left unrevealed is 0;
    //if yes, call win function/change win flag
    //if no, return to function play game
}

function win(){
    //increase win counter      document.getElementById("totalWins").innerText = wins;
    //call function initialize

}

function checkIfLost(){
    //check if guesses left counter === 0
    //if yes, change fase flag, call initialize function
    //if no return to play game fucntion
}


