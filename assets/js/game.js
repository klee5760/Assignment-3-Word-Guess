  var chosenWord = " ";

  var lettersInChosenWord = [];

  var blanks = 0;

  var blankandsuccess = [];

  var wrongGuesses = [];

  var win = 0;
  var lose = 0;
  var numGuesses = 10;

  function startGame() {

  numGuesses = 10;

  chosenWord = words[Math.floor(Math.random()*words.length)];

  lettersInChosenWord = chosenWord.split("");

  blanks= lettersInChosenWord.length;

  console.log(chosenWords);

blankandsuccess = [];

wrongGuesses = [];

for (var i=0; i < blanks; i++) {
  blankandsuccess.push("-");
}

console.log(blankandsuccess);

document.getElementById("guesses-left").innerHTML = numGuesses;

document.getElementById("currentpuzzle").innerHTML = blankandsuccess.join("");

document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");


function checkLetters(letter) {

  var lettersInWord = false;

  for (var i=0; i<blanks; i++) {
    if (chosenWord[i] === letter) {

      lettersInWord = true;
    }
  }

  if (lettersInWord) {

    for (var j=0; j<blanks; j++) {

      if (chosenWord[j] === letter) {
        blankandsuccess[j] = letter;
      }

    }
    console.log(blankandsuccess);
  }
    
  else{

    wrongGuesses.push(letter);
    numGuesses--;

    
  }
}

function finishGame() {

  console.log("Win: " + win + "|Lose: " + lose+ "|NumGuesses" + numGuesses);

doucument.getElementById("guesses-left").innerHTML = numGuesses;

doucument.getElementById("currentpuzzle").innerHTML = blankandsuccess.join("");

doucument.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");


if (lettersInChosenWord.toString()=== blankandsuccess.toString()) {
  win++
  alert("You got it!")

  document.getElementById("win").innerHTML = win;
  startGame()
}

else if (numGuesses === 0) {

  lose++
  alert("Oh! Here is the correct answer!")

  document.getElementById("lose").innerHTML = lose;
  startGame();
}
}
startGame();
music.play();
document.onkeyup = function(event){

  if(event.keyCode >= 65 && event.keyCode <= 90){

    var letterGuessed = event.key.toLowerCase();

    checkLetters(letterGuessed);

    finishGame();
    


  }
}
  
}
