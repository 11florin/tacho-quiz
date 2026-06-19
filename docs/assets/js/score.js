"use strict";

const rawSessionDone = localStorage.getItem("tq_session_done");
const rawScore = localStorage.getItem("tq_score");
const rawTotal = localStorage.getItem("tq_total");
const rawAnswers = localStorage.getItem("tq_answers");

if (
  rawSessionDone !== "1" ||
  rawScore === null ||
  rawTotal === null ||
  rawAnswers === null
) {
  alert("No quiz session found. Please complete a quiz first.");
  window.location.replace("index.html");
  throw new Error("Invalid or missing quiz session");
}

const score = Number.parseInt(rawScore, 10);
const total = Number.parseInt(rawTotal, 10);
let answers;

try {
  answers = JSON.parse(rawAnswers);
} catch {
  alert("No quiz session found. Please complete a quiz first.");
  window.location.replace("index.html");
  throw new Error("Invalid or missing quiz session");
}

if (
  !Number.isInteger(score) ||
  !Number.isInteger(total) ||
  total <= 0 ||
  !Array.isArray(answers) ||
  answers.length === 0
) {
  alert("No quiz session found. Please complete a quiz first.");
  window.location.replace("index.html");
  throw new Error("Invalid or missing quiz session");
}

localStorage.removeItem("tq_session_done");

// DOM elements for score display
const scoreValue = document.getElementById("score-value");
const scoreBar = document.getElementById("score-bar");
const scorePercent = document.getElementById("score-percent");
const scoreMessage = document.getElementById("score-message");
const scoreBreakdown = document.getElementById("score-breakdown");

//  Calculate score percentage and update UI
const LABELS = ["A", "B", "C", "D"];
const safeScore = score;
const safeTotal = total;

// Compute percentage
let pct = Math.round((safeScore / safeTotal) * 100);

// Clamp to [0, 100]
pct = Math.min(Math.max(pct, 0), 100);
// Update UI
scoreValue.textContent = `${safeScore} / ${safeTotal}`;
scorePercent.textContent = `${pct}%`;

// Trigger score bar animation after initial render.
// requestAnimationFrame waits for the browser to paint,
// setTimeout ensures the width change is detected as an animation.
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
  message = "💪 Don\'t give up - try again!";
}
scoreMessage.textContent = message;

// Build a breakdown of the last answered question
// Shows correct answer, chosen answer and explanation
const last = answers[answers.length - 1];
const title = document.createElement("p");
title.className = "breakdown-title";
title.textContent = "Last question breakdown:";
scoreBreakdown.appendChild(title);

// Loop through all answer options
let i = 0;
while (i < last.answers.length) {
  const item = document.createElement("div");
  const isCorrect = i === last.correct;
  const wasChosen = i === last.chosen;

  // Apply correct/wrong styling
  item.className =
    "breakdown-item" + (isCorrect ? " correct" : wasChosen ? " wrong" : "");

  const label = document.createElement("span");
  label.className = "answer-label";
  label.textContent = `${LABELS[i]}.`;

  item.appendChild(label);
  item.appendChild(document.createTextNode(last.answers[i]));
  scoreBreakdown.appendChild(item);
  i++;
}

// Add explanation text
const exp = document.createElement("p");
exp.className = "explanation-text";
exp.textContent = `Explanation: ${last.explanation}`;
scoreBreakdown.appendChild(exp);

// Save the completed quiz attempt to history
// Used for future statistics or review pages
const historyRaw = localStorage.getItem("tq_history");
let history = [];
try {
  history = historyRaw === null ? [] : JSON.parse(historyRaw);
} catch {
  history = [];
}
const currentCategory = localStorage.getItem("tq_category");

if (currentCategory !== null) {
  history.push({
    category: currentCategory,
    score: safeScore,
    total: safeTotal,
    date: new Date().toLocaleDateString("en-GB"),
  });
  localStorage.setItem("tq_history", JSON.stringify(history));
}

// Best Score
// Read the played category (saved by quiz.js)
const playedCategory = localStorage.getItem("tq_quiz_category");

if (playedCategory !== null) {
  const bestScoresRaw = localStorage.getItem("tq_best_scores");
  let bestScores = {};
  try {
    bestScores = bestScoresRaw === null ? {} : JSON.parse(bestScoresRaw);
  } catch {
    bestScores = {};
  }
  const prevBest = bestScores[playedCategory]
    ? bestScores[playedCategory].pct
    : 0;

  // It only updates if the current score is higher
  if (pct > prevBest) {
    bestScores[playedCategory] = {
      pct: pct,
      score: safeScore,
      total: safeTotal,
      date: new Date().toLocaleDateString("en-GB"),
    };
    // Save the entire object back to localStorage as JSON
    localStorage.setItem("tq_best_scores", JSON.stringify(bestScores));
  }
}
