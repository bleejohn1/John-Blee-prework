
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

    console.log(position);

   /*
   if(displayWord.indexOf("_") === -1)
    {
        numberOfWins++;
        document.getElementById("winsI").innerText = numberOfWins;
      // mainLoop();
     // initializeValues();
    }
    */

}

function incorrectChoice(letterUserEntered)
{
    console.log("we are now in incorrectChoice");
    //decrease the guess counter by 1
        guessCounter--;
        document.getElementById("guessesLeftI").innerText = guessCounter;
    //add incorrect letter to array and display it
        usedLetters.push(letterUserEntered);                                        //Incorrect letter is added to letter graveyard
        document.getElementById("lettersGuessedI").innerText = usedLetters;         //Letter graveyard is updated/displayed on screen

    
    //check if user has lost yet
    if(guessCounter <= 0)
    {
      
        initializeValues();
    }
    else
    {
        mainLoop();
    }

}






