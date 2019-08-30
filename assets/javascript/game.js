//This is the Psychic-Game!

//Make a variable name of "computerChoices" and a value of arrays with all 26 letters in the alphabet.

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "w", "z"];

//Make a variable for each ID's needed on html.
var youPressed = document.getElementById("you-pressed");
var computerPressed = document.getElementById("computer-pressed");
var youWin = document.getElementById("you-win");
var youLose = document.getElementById("you-lose");
var guessesLeft = document.getElementById("guesses-left");
var yourGuesses = document.getElementById("your-guesses");

//Make a variable for scores
var wins = 0;
var lose = 0;
var attempts = 9;



//Make an function the key is run when the use press a key.
document.onkeyup = function (event) {


    //Make a variable computerGuess and a value that randomizes letters.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Make a varible for user when key is pressed via document.onkeyup
    var userGuess = event.key;

    //Make if statements for user that shows which key is pressed
    if ((userGuess === computerChoices.length && computerGuess === computerChoices.length)) {


        if (userGuess === computerGuess) {
            wins++;
        }

        else if (userGuess !== computerGuess) {
            lose++;
        }
       



    }
    //Text-Contents
    youPressed.textContent = "You Chose: " + userGuess;
    computerPressed.textContent = "Your Opponent Chose: " + computerGuess;
    yourGuesses.textContent = "Your Guesses So Far: " + userGuess;
    youWin.textConent = "Your Score: " + wins;
    youLose.textContent = "Losses: " + lose;
    guessesLeft.textContent = "Your Attempts: " + attempts;


};