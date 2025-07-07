document.addEventListener("keydown", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber + ".png";
  var imagePath = "images/" + randomDiceImage;

  var random = Math.floor(Math.random() * 6) + 1;
  var randomDice = "dice" + random + ".png";
  var imagePathh = "images/" + randomDice;

  document.querySelector(".img1").setAttribute("src", imagePath);
  document.querySelector(".img2").setAttribute("src", imagePathh);

  if (randomNumber === random) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber > random) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
  }
});
