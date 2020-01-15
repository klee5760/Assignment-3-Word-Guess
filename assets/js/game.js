var guessesLeftSPAN = document.getElementById("guessesLeft");
var lettersGuessedSPAN = document.getElementById("lettersGuessed");
var underscoresDIV = document.getElementById("underscores");
var winsSPAN = document.getElementById("wins");
var lossesSPAN = document.getElementById("losses");

var wins = 0,
  losses = 0,
  underscores,
  lettersGuessed,
  guessesLeft,
  word;

start();
document.addEventListener("keydown", handleKey);

function handleKey(event) {
  console.log(event.key);
}

function start() {
  lettersGuessed = [];
  guessesLeft = 10;
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
