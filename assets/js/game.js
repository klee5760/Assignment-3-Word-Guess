var guessesLeftSPAN = document.getElementById("guessesLeft");
var lettersGuessedSPAN = document.getElementById("lettersGuessed");
var underscoresDIV = document.getElementById("underscores");
var winsSPAN = document.getElementById("wins");
var lossesSPAN = document.getElementById("losses");

var wins = 0,
  losses = 0,
  underscores, //underline letters//
  lettersGuessed, //letter used//
  guessesLeft, //number of guesses left//
  word;  //chosen word//
  wrongGuess,
  rightGuess,

start();
document.addEventListener("keydown", handleKey);

function handleKey(event) {
  console.log(event.key);
}

function start() {
  lettersGuessed = [];
  guessesLeft = 15;
  word = getRandomWord();
  underscores = getUnderScores(word);

  guessesLeftSPAN.textContent = guessesLeft;
  lettersGuessedSPAN.textContent = "";
  winsSPAN.textContent = wins;
  lossesSPAN.textContent = losses;

  underscoresDIV.innerHTML = underscores.join(" ");
}

// var _word = "WHATAEVER WE PASS TO FUNCTION"
function getUnderScores(_word) {
  var temp = [];
  for (var i = 0; i < _word.length; i++) {
    if (_word[i] === " ") {
      temp.push("&nbsp;");
    } else if (_word[i] === "'") {
      temp.push("'");
    } else {
      temp.push("_");
    }
  }
  return temp;
}



function finishedGame () {
//if you get all letters before the number of guesses runs out//
  if (guessesLeft === 0){

    this.restartGame();

  }

 else {

  this.worongGuess(letter);
  this.rightGuess(letter);
  this.correctAnswer();

  if (this.updateWins() === true){

  }
 }
},

updateGuesses: function(letter) {

  if ((this.lettersGuessed.indexof(letter) === -1)) && (this.word.indexOf(letter) === -1); {
    this.lettersGuessed.push(letter);
    
    this.guessesLeft--;

    document.querySelector("#numberofGuessesLeft").innerHTML = this.guessesLeft;
    document.querySelector("#letterguessed").innerHTML = 
    this.lettersGuessed.join(",");

    
  }
},

processUpdateTotalGuesses: function() {

  this.totalGuesses = this._word;
  this.guessesLeft = this.totalGuesses;
}

updateLetters:function(letter){


  for(var i=0; i < this.word.length;i++){

    if ((letter ===  this.word[i]) && (this.rightGuess.indexof(letter)=== -1)){
      this.rightGuess.push(letter);
    }
   }
},

document.querySelector('#current-word:').innerHTML = _word;

restartGame: function() {
  document.querySelector("#letterguessed").innerHTML = "";
  this.wordInPlay = null;
  this.lettersOfTheWord = [];
  this.matchedLetters = [];
  this.guessedLetters = [];
  this.guessesLeft = 0;
  this.totalGuesses = 0;
  this.letterGuessed = null;
  this.setupGame();
  this.rebuildWordView();

  updateWins:function() {

    var win;

    if(this.rightGuess.length === 0) {

  lose++
  alert("You Lost. Try Another Phrase")

  else {

    win++
    alert("Congratulations! You Win!")
  }
    }

    document.querySelector("wins").innerHTML = this.wins;
  }