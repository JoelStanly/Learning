"use strict";

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

const dice = document.querySelector(".dice");
const player = document.querySelectorAll(".player");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnReset = document.querySelector(".btn--new");

let scores, currentScore, activePlayer, playing;

// Switch Player

const switchPlayer = () => {
  for (let i = 0; i < player.length; i++) {
    player[i].classList.toggle("player--active");
  }
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// Roll Dice

const rollDice = () => {
  if (playing) {
    let randomValue = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomValue}.png`;
    dice.classList.remove("hidden");

    if (randomValue != 1) {
      currentScore += randomValue;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

// Hold Score

const holdScore = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
    }
  }
};

// Reset Game

const resetGame = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  for (let i = 0; i < player.length; i++) {
    player[i].classList.remove("player--winner");
  }
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
};

resetGame();

btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
btnReset.addEventListener("click", resetGame);
