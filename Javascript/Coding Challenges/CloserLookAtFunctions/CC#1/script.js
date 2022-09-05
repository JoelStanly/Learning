"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:  C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let answer = Number(prompt(`${this.question}\n${this.options.join("\n")}`));
    if (typeof answer == "number" && answer < this.answers.length)
      this.answers[answer]++;
    this.displayResults();
  },
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    }
    if (type === "string") {
      console.log(`Poll results are ${this.answers.join(",")}`);
    }
  },
};

let pollButton = document.querySelector(".poll");

pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
