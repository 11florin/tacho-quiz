"use strict";

const rawScore = localStorage.getItem("tq_score");
const rawTotal = localStorage.getItem("tq_total");
const rawAnswers = localStorage.getItem("tq_answers");
const sessionAlreadyShown = localStorage.getItem("tq_saved") === "1";

const hasQuizSession =
  rawScore !== null &&
  rawTotal !== null &&
  rawAnswers !== null &&
  rawAnswers !== "[]" &&
  parseInt(rawTotal, 10) > 0 &&
  !sessionAlreadyShown;

const score = hasQuizSession ? parseInt(rawScore, 10) : 0;
const total = hasQuizSession ? parseInt(rawTotal, 10) : 0;
const answers = hasQuizSession ? JSON.parse(rawAnswers) : [];

// DOM elements for score display
const scoreValue = document.getElementById("score-value");
const scoreBar = document.getElementById("score-bar");
const scorePercent = document.getElementById("score-percent");
const scoreMessage = document.getElementById("score-message");
const scoreBreakdown = document.getElementById("score-breakdown");

//  Calculate score percentage and update UI
const LABELS = ["A", "B", "C", "D"];

const safeScore = Number.isFinite(score) ? score : 0;
const safeTotal = Number.isFinite(total) && total > 0 ? total : 0;

// Comute percentage
let pct = safeTotal > 0 ? Math.round((safeScore / safeTotal) * 100) : 0;

// Clamp to [0, 100]
pct = Math.min(Math.max(pct, 0), 100);
// Update UI
scoreValue.textContent = `${safeScore} / ${safeTotal}`;
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
if (!hasQuizSession) {
  message = "No quiz session found yet. Start a quiz to see your score.";
} else if (pct === 100) {
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
if (hasQuizSession && answers.length > 0) {
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

    // Applied GitHub Copilot's security recommendation by replacing innerHTML with safe DOM node creation (textContent + createTextNode) to prevent HTML injection. Fix implemented with assistance from Copilot AI.
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
}

// Save the completed quiz attempt to history
//  Used for future statistics or review pages
if (hasQuizSession) {
  const history = JSON.parse(localStorage.getItem("tq_history") || "[]");
  history.push({
    category: localStorage.getItem("tq_category") || "unknown",
    score: score,
    total: total,
    date: new Date().toLocaleDateString("en-GB"),
  });
  localStorage.setItem("tq_history", JSON.stringify(history));
  localStorage.setItem("tq_saved", "1"); // mark as saved
}

// Best Score
// Read the played category (saved by quiz.js)
const playedCategory = localStorage.getItem("tq_quiz_category") || "unknown";
// Read the JSON object with all the best scores per category.
const bestScores = JSON.parse(localStorage.getItem("tq_best_scores") || "{}");
// Read the previous best score for this category (or 0)
const prevBest = bestScores[playedCategory]
  ? bestScores[playedCategory].pct
  : 0;

// It only updates if the current score is higher
if (hasQuizSession && pct > prevBest) {
  bestScores[playedCategory] = {
    pct: pct,
    score: safeScore,
    total: safeTotal,
    date: new Date().toLocaleDateString("en-GB"),
  };
  // Save the entire object back to localStorage as JSON
  localStorage.setItem("tq_best_scores", JSON.stringify(bestScores));
}
