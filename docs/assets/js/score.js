"use strict";

// Retrieve stored quiz data from localStorage
const score = parseInt(localStorage.getItem("tq_score") || "0", 10);
const total = parseInt(localStorage.getItem("tq_total") || "10", 10);
const answers = JSON.parse(localStorage.getItem("tq_answers") || []);

// DOM elements for score display
const scoreValue = document.getElementById("score-value");
const scoreBar = document.getElementById("score-bar");
const scorePercent = document.getElementById("score-percent");
const scoreMessage = document.getElementById("score-message");
const scoreBreakdown = document.getElementById("score-breakdown");

//  Calculate score percentage and update UI
const LABELS = ["A", "B", "C", "D"];
const pct = Math.round((score / total) * 100);

scoreValue.textContent = `${score} / ${total}`;
scorePercent.textContent = `${pct}%`;

// Trigger score bar animation after initial render.
// requestAnimationFrame waits for the browser to paint,
// setTimeout ensures the width change is detected as an animation.
// Code from Claude AI
requestAnimationFrame(() => {
  setTimeout(() => {
    scoreBar.style.width = pct + "%";
  }, 100);
});

//  Display a message based on the user's score
let message = "";
if (pct === 100) {
  message = "💯 Perfect score! Outstanding!";
} else if (pct >= 80) {
    message = "👏 Great Job!";
} else if (pct >= 60) {
    message = "👍 Good effort! Keep practising.";
} else if (pct >= 40) {
    message = "📚 Keep studying - you can do it!";
} else {
    message = "💪 Don\'t give up - try again!"
}
scoreMessage.textContent = message;
