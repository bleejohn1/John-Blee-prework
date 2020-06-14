
    const maximumNumberTries = 10;              //the total number of tries the user can take
    var usedLetters = [];             //array of letters that have already been guessed
    var wordBeingGuessed = [];                  //the current word the user is trying to guess
    var numGuessesLeft;                         //the number of guesses the user currently has left            
    var displayWord = [];   
    var THELETTER = '';                 //the word user is trying to guess that is actually displayed on screen with dashes for unguessed letters
    var numberOfWins = 400000;                  //the number of times the user has won
    var indexOfWordToGuess = -1;                //index number of the array containing the word to guess
    var winFlag = false;                        //flag that says if the game has been won
    var loseFlag = false;                       //flag that says if the game has been lost
    var whileFlag = false;
    var wordsToGuessFromArray = ["Washington",  //An array with a list of words to chose from
    "adams",
    "jefferson",
    "madison",
    "monroe",
    "jackson",
    "tyler",
    "polk",
    "taylor",
    "fillmore",
    "pierce"];
//}


winsIH1 = document.querySelector('#winsI');
const currentWordIH1 = document.querySelector('#currentWordI');
const guessesLeftIH1 = document.querySelector('#guessesLeftI');
const lettersGuessedIH1 = document.querySelector('#lettersGuessedI');



function initializeValues()
{
    //console.log(2); //testing
    // for testing use; console.log(numberOfWins);
    usedLetters = [];     //console.log(usedLetters);
    displayWord = [];
    numGuessesLeft = maximumNumberTries;  //console.log(numGuessesLeft);
    winFlag = false;              //  console.log(winFlag);
    loseFlag = false;             //  console.log(loseFlag);
    indexOfWordToGuess = Math.floor(Math.random() * (wordsToGuessFromArray.length));       //The INDEX of the chosen word in the Array of Guessable words; this will be a number;
    wordBeingGuessed = wordsToGuessFromArray[indexOfWordToGuess];
             
        // randomly take a value from wordsToGuessFrom array
    console.log("initializeValues ran properly");   

    for (var i = 0; i < wordsToGuessFromArray[indexOfWordToGuess].length; i++)              //could also use word being guessed
    {
        displayWord.push("_");
    }
        
    
}

//document.addEventListener('keydown',mainLoop);



//************************************************************************************************************/

function mainLoop(){      //      function for testing purposes to see values at any point in the program this is called
    document.getElementById("winsI").innerText = numberOfWins;
    document.getElementById("currentWordI").innerText = displayWord;
    document.getElementById("guessesLeftI").innerText = numGuessesLeft;
    document.getElementById("lettersGuessedI").innerText = usedLetters;
 /*   console.log(maximumNumberTries);
    console.log(numberOfWins);
    console.log(indexOfWordToGuess);
    console.log(winFlag);
    console.log(loseFlag);
    console.log(wordsToGuessFromArray);
    console.log(displayWord);
    console.log(wordBeingGuessed);              */
    console.log("showValues ran properly");
}


//wordBeingGuessed = wordsToGuessFrom[wordsToGuessFrom.length];
// wait for input and then call "checkGuess"




/*
function validate(letter)
{
    console.log("validate function ran");
    if(letter <= 65 || letter >=90)
    {
        console.log("incorrect letter");
        document.addEventListener('keydown', validate);
    }
    else
        return;

}
*/

function assignKey(event)
{
 

}



function checkGuess(letter)
{

}

function correctGuess(){
    //reveal letter     
      //  document.getElementById("winsIH1").innerText = wins;
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



// document.addEventListener('keyup', showWins);       //testing to see if keystrokes work
/*
function showWins()
{
    document.getElementById("winsI").innerText = numberOfWins;

}
*/





//document.addEventListener('keydown', mainLoop);




/*
document.onkeydown = function(event)
{
    if(event.KeyCode <= 65 || event.KeyCode >=90)
    {
        mainLoop();
    }
    /*
    if(event.KeyCode <= 65 || event.KeyCode >= 90)
    {
    
    }
    //recognize keystroke
    //check if entered key is in the array of the correct word
        //if yes call function "correct Guess"
        //if no, call function "incorrect guess"
  //  if()
  
    else
        return;
    
    
}
*/