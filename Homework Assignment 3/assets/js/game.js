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

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}


function letterused() {
// if the letter is in the chosen word//
if (lettersGuessed = underscores)
    (guessesLeft [i]--);



else {}

  guessesLeft --;
  return;

    }
}



function finishedGame () {
//if you get all letters before the number of guesses runs out//
  if (underscores = word){
    alert ("You Win!");
    wins++;
    guessesLeft = 15;
    window.location.reload();
  }

    else if (guessesLeft <0) {
    document.getElementById("Word").innerHTML == word;
    alert("You ran out of lives, Please try again");
    losses++;
    guessesLeft = 15;
    window.location.reload();
    }


  }



