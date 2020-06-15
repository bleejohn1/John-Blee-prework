
    const maximumNumberTries = 10;              //the total number of tries the user can take
    var usedLetters = [];             //array of letters that have already been guessed
    var wordBeingGuessed = [];                  //the current word the user is trying to guess
    var guessCounter = maximumNumberTries;                         //the number of guesses the user currently has left            
    var displayWord = [];   
    var THELETTER = '';                 //the word user is trying to guess that is actually displayed on screen with dashes for unguessed letters
    var numberOfWins = 0;                  //the number of times the user has won
    var indexOfWordToGuess = -1;                //index number of the array containing the word to guess
    var winFlag = false;                        //flag that says if the game has been won
    var loseFlag = false;                       //flag that says if the game has been lost
    var whileFlag = false;
    var wordsToGuessFromArray = ["washington",  //An array with a list of words to chose from
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
    guessCounter = maximumNumberTries;  //console.log(guessCounter);        
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
        
    //mainLoop();
}

//document.addEventListener('keydown',mainLoop);



//************************************************************************************************************/

function mainLoop(){      //            main function that displays the values, and checks if game is won
        if(winFlag === true)
        {
            console.log("initialize values flag was true");
            //  Call winFunction to increase win counter   initializeValues();
        }
    
    document.getElementById("winsI").innerText = numberOfWins;
    document.getElementById("currentWordI").innerText = displayWord;
    document.getElementById("guessesLeftI").innerText = guessCounter;
    document.getElementById("lettersGuessedI").innerText = usedLetters;
  //  console.log(maximumNumberTries);
    console.log(numberOfWins);
    console.log(indexOfWordToGuess);
    console.log(winFlag);
    console.log(loseFlag);
    console.log(wordsToGuessFromArray);
    console.log(displayWord);
    console.log(wordBeingGuessed);              
    console.log("mainLoop ran properly");
}


document.onkeydown = function(event)
{
    console.log("onkeydown worked");        //tracing to see if keystroke is detected
    //check if correct
    var positions = [];

    for(var i = 0; i < wordBeingGuessed.length; i++)
    {
        if(wordBeingGuessed[i] === event.key)
        {
            positions.push(i);
        }
    }

        //CORRECT if correct revealLetter(event.key)
    if(positions.length > 0)            //checking if there's anything in the array
    {
        correctChoice(event.key, positions);
    }
        //if incorrect 
    else
    {
        incorrectChoice(event.key);
    }
}

function correctChoice(letterUserEntered,position)
{
    console.log("we are now in correctChoice");
    console.log(letterUserEntered);
    // check if letter was guessed already
        if(usedLetters.indexOf(letterUserEntered) === -1)
        {
            console.log("This letter was used already");
            mainLoop();
        }
    //change array
        for(var i = 0; i < position.length; i++)
        {
            displayWord[position[i]] = letterUserEntered;
            document.getElementById("currentWordI").innerText = displayWord;
        }
    // reveal letter on screen
    // call function checkIfWon(letter)
    console.log(position);
   // console.log(displayWord[0]);
    checkIfWon(letterUserEntered);
}

///////NOT CORRECT

function incorrectChoice(letterUserEntered)
{
    console.log("we are now in incorrectChoice");
    //decrease the guess counter by 1
        guessCounter--;
        document.getElementById("guessesLeftI").innerText = guessCounter;
    //add incorrect letter to array and display it
        usedLetters.push(letterUserEntered);                                        //Incorrect letter is added to letter graveyard
        document.getElementById("lettersGuessedI").innerText = usedLetters;         //Letter graveyard is updated/displayed on screen

    //call function checkIfLost(letter)
    //check if user has lost yet
    if(guessCounter <= 0)
    {
        console.log("checking if user has lost");
        initializeValues();
    }
    else
    {
        mainLoop();
    }

}


function checkIfWon(letterUserEntered)
{
    console.log("we are now in checkIfWon");
    //If they won 
        //increase win counter
        //change win flag to true
        //call mainLoop
    if()
    //If they did not win
        // return to mainLoop    

}


function checkIfLost(letterUserEntered)
{
    console.log("we are in checkIfLost");
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