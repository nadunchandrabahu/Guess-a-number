"use strict";

let answer = Math.round(Math.random() * 20);
console.log(answer);

let choice = Number(document.querySelector(".spinner").value);

let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);

function checkAnswer() {
  choice = Number(document.querySelector(".spinner").value);
  if (!choice) {
    document.querySelector(".message").textContent = "😡 No number!";
    return;
  }
  if (document.querySelector(".btn-check").style.cursor === "not-allowed") {
    return;
  }
  if (choice === answer) {
    document.querySelector(".message").textContent = "🥳 Correct Answer!";
    document.querySelector(".number").textContent = answer;
    if (score >= highscore) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
      alert("Congratulations! 🥳 That was a high score!");
    }
    // disable check button here, also add green background to
    document.querySelector(".btn-check").style.opacity = 0.6;
    document.querySelector("body").style.backgroundColor = "#4cd137";
    document.querySelector(".btn-check").style.cursor = "not-allowed";
  } else if (choice < answer) {
    document.querySelector(".message").textContent = "⬆️ Too low!";
    score = setScore(score);
  } else {
    document.querySelector(".message").textContent = "⬇️ Too high!";
    score = setScore(score);
  }
}

function setScore(score) {
  score--;
  document.querySelector(".score").textContent = score;
  if (score === 0) {
    alert("Game Over!");
    //disable check button here also add red background to app
    document.querySelector(".btn-check").style.opacity = 0.6;
    document.querySelector("body").style.backgroundColor = "#d63031";
    document.querySelector(".btn-check").style.cursor = "not-allowed";
    document.querySelector(".number").textContent = answer;
  }
  return score;
}

function restart() {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  score = setScore(11);
  answer = Math.round(Math.random() * 20);
  console.log(answer);
  //set background color back to default, enable check button
  document.querySelector(".btn-check").style.opacity = 1;
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".btn-check").style.cursor = "pointer";
  document.querySelector(".spinner").value = "";
}

document.querySelector(".btn-check").addEventListener("click", checkAnswer);
document.querySelector(".btn-Again").addEventListener("click", restart);
