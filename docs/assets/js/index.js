"use strict";

// Best Score display
// Read the best score from localStorage
const bestPct = localStorage.getItem("tq_best_pct");
const bestScore = localStorage.getItem("tq_best_score");
const bestTotal = localStorage.getItem("tq_best_total");
const bestCategory = localStorage.getItem("tq_best_category");
const bestDate = localStorage.getItem("tq_best_date");

// Get the category grid container element
const catGrid = document.getElementById("cat-grid");
// Get the text element that displays the current status
const statusText = document.getElementById("status-text");
// Get the Start Quiz button
const startBtn = document.getElementById("start-btn");

const bestScoreBox = document.getElementById("best-score-box");

// It only displays if there is a saved best score
if (bestPct !== null && bestScoreBox) {
  bestScoreBox.style.display = "flex";
  document.getElementById("best-pct").textContent = bestPct + "%";
  document.getElementById("best-fraction").textContent = bestScore + " / " + bestTotal;
  document.getElementById("best-cat").textContent = bestCategory.replace(/-/g, " ");
  document.getElementById("best-date").textContent = bestDate;
}

// Listen for clicks inside the category grid
catGrid.addEventListener("click", function (e) {
  // Find the nearest category button that was clicked
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;

 // Deselect previous active button (visual + ARIA)
  const prev = document.querySelector(".cat-btn.selected");
  if (prev && prev !== btn) {
    prev.classList.remove("selected");
    prev.setAttribute("aria-pressed", "false");
  }

  // Toggle selection for the clicked button
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
    btn.setAttribute("aria-pressed", "false");

    statusText.textContent = "Select a category to begin";
    startBtn.disabled = true;

    // Clear saved category
    localStorage.removeItem("tq_category");
  } else {
    btn.classList.add("selected");
    btn.setAttribute("aria-pressed", "true");

    statusText.textContent = btn.textContent.trim() + " selected";
    startBtn.disabled = false;

    // Save selected category
    localStorage.setItem("tq_category", btn.dataset.cat);
  }
});

// Start Quiz button handler
startBtn.addEventListener('click', function() {
    const category = localStorage.getItem("tq_category");
    if (!category) return;

    // Reset quiz progress
    localStorage.setItem("tq_questionIndex", "0");
    localStorage.setItem("tq_score", "0");
    localStorage.removeItem("tq_answer");

    // Navigate to quiz page
    window.location.href = "quiz.html";
});
