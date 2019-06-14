var computerLetter = "";
var userLetter = "";
var wins = 0;
var losses = 0;
var tries = 10;
var lettersGuessed = [];

var letterBank = "abcdefghijklmnopqrstuvwxyz";

var winSpan = document.getElementById("wins");
var lossSpan = document.getElementById("losses");
var guessspan = document.getElementById("guesses");
var lettersGuessedSpan = document.getElementById("letters-guessed");







function startGame() {
    computerLetter = letterBank[Math.floor(Math.random() * 26)];
    console.log(computerLetter);
    tries = 10
    winSpan.innerText = wins;
    lossSpan.innerText = losses;
    guessspan.innerText = tries;
    lettersGuessed = [];
}


document.addEventListener("keydown", function (event) {
    // console.log(event.key);
    if (event.key === computerLetter) {
        console.log("YOU WIN!!!!");
        wins++
        // console.log(wins);
        startGame();
    } else {
        // console.log("LOSER!!!!!");
        lettersGuessed.push(event.key);
        console.log(lettersGuessed);
        lettersGuessedSpan.innerText = lettersGuessed.join(" ");
        tries--;
        guessspan.innerText = tries;
        // console.log(tries);
        checkTries();
    }
})

function checkTries() {
    if (tries < 1) {
        console.log("loser");
        losses++
        console.log(losses);
        startGame();
    }
}











startGame();

