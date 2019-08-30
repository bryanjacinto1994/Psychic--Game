//This is the Psychic-Game!

//Make a variable name of "computerChoices" and a value of arrays with all 26 letters in the alphabet.

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "w", "z"];

//Make a variable for score subjects
var wins = 0;
var lose = 0;
var attempts = 9;
var guessMade = [];
var lettersPressed = lettersPressed;


//Make an function the key is run when the use press a key.
document.onkeyup = function (event) {


    //Make a variable computerGuess and a value that randomizes letters.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(lettersPressed);


    //Make a varible for user when key is pressed via document.onkeyup
    var userGuess = event.key;

    //Make if statements for user that shows which key is pressed
    if ((userGuess === computerChoices.length && computerGuess === computerChoices.length)) {
    }

    //Make a statement where userGuess keys is equal to computerGuess keys, you win.
    if ((userGuess === computerGuess && computerGuess === userGuess)) {
    wins++;
    attempts = 9;
        }
    //Make a else if statement where if userGuess keys is not equal to computerGuess keys, you lose.
    else if (userGuess !== computerGuess) {
    lose++;
    attempts = 9;
        }







    

    //Make a variable for each ID's needed on html.
    var youPressed = document.getElementById("you-pressed");
    var computerPressed = document.getElementById("computer-pressed");
    var youWin = document.getElementById("you-win");
    var youLose = document.getElementById("you-lose");
    var guessesLeft = document.getElementById("guesses-left");
    var yourGuesses = document.getElementById("your-guesses");
    //Text-Contents
    youPressed.textContent = "You Chose: " + userGuess;
    computerPressed.textContent = "Your Opponent Chose: " + computerGuess;
    yourGuesses.textContent = "Your Guesses So Far: " + userGuess;
    youWin.textContent = "Your Score: " + wins;
    youLose.textContent = "Losses: " + lose;
    guessesLeft.textContent = "Your Attempts: " + attempts;


};