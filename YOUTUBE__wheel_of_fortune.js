Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 10;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

Main.PullWord = function() {
  Main.Word = Words.List[Math.floor(Math.random() * Main.NumInWordBank)];
};

Main.SetUnderline = function() {
  Main.PullWord();
  for (i = 0; i < Main.Word.length; i++) {
    Main.WordArray[i] = Main.Word.charAt(i);
    Main.WordUArray[i] = "-";
  }

  Main.WordU = Main.WordUArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  document.getElementById("numletters").innerHTML = Main.WordU.length;
};

Main.UpdateLetter = function(letter) {
  Main.Changes = 0;
  for (i = 0; i < Main, Word.length; i++) {
    Main.WordArray[i] = Main.Word.charAt(i);
    if (Main.WordUArray[i] == letter) {
      Main.WordUArray[i] == letter;
      Main.Changes += 1;
    }
  }

  if (Main.Changes < 1) {
    Main.Lives -= 1;
    document.getElementById("lives").innerHTML = Main.Lives;
  }

  Main.WordU = Main.WordUArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;

  Main.Word1 = Main.WordArray.join("");
  Main.Word2 = Main.WordUArray.join("");

  if (Main.Word1 == Main.Word2) {
    alert("You Win! ");
    window.location.reload();
  }

  if (Main.Lives < 1) {
    document.getElementById("Word").innerHTML == Main.Word1;
    alert("You ran out of lives, Please try again");
    window.location.reload();
  }
};

Main.PullWord();
Main.SetUnderline();