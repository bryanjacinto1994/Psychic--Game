//This is the Psychic-Game!

//Make a variable name of "computerChoices" and a value of arrays with all 26 letters in the alphabet.

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","w","z"];

//Make an function the key is run when the use press a key.
document.onkeyup = function(event){}

//Make a variable computerGuess and a value that randomizes letters.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];