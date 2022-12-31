"use strict";
/*
//assigning DOMS
const againTrying = document.querySelector(".again");
const checkNumber = document.querySelector(".check");
const guessNumber = document.querySelector(".guess");

//random number code
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//set initially values of score and highscore
let score = 20;
let highScore = 0;

//functions

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const numberRandom = function (number) {
  document.querySelector(".number").textContent = number;
};
const highScoreNumber = function (highScore) {
  document.querySelector(".highscore").textContent = highScore;
};

const scoreShow = function (score) {
  document.querySelector(".score").textContent = score;
};

//check button
checkNumber.addEventListener("click", function () {
  const guess = Number(guessNumber.value);
  if (!guess) {
    displayMessage("⛔ no number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉correct number!");
    numberRandom(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreNumber(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 number is too high!"
          : "📈 number is too low!"
      );
      score--;
      scoreShow(score);
    } else {
      displayMessage("🎮 you lost the game!");
      scoreShow(0);
    }
  }
});

//again button
againTrying.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreShow(20);
  displayMessage("Start guessing...");
  numberRandom("?");
  guessNumber.value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});

*/
