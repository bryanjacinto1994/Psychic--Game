//This is the Psychic-Game!

//Make a variable name of "computerChoices" and a value of arrays with all 26 letters in the alphabet.

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","w","z"];

//Make an function the key is run when the use press a key.
document.onkeyup = function(event){}

//Make a variable for each ID's needed on html.
var youPressed = document.getElementById();
var computerPressed = document.getElementById();
var youWin = document.getElementById();
var youLose = document.getElementById();
var guessesLeft = document.getElementById();
var yourGuesses = document.getElementById();

//Make a variable for scores
var wins = 0;
var lose = 0;
var attempts = 9;

//Make a variable computerGuess and a value that randomizes letters.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Make a varible for user when key is pressed via document.onkeyup
var userGuess = event.key;

//Make if statements for user that shows which key is pressed
if (userGuess === computerChoices.length){
    youPressed.textContent = event.key;
    computerPressed.textContent = computerGuess;


}