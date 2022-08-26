"use strict";

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number 🔢";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct Answer 🎉";
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else {
    score--;
    document.querySelector(".score").textContent = score;
    if (score != 0) {
      document.querySelector(".message").textContent =
        guess > number ? "Too high ☝" : "Too low 👇";
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  }
});
