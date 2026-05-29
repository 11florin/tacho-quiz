"use strict";

// localStorage.removeItem("tq_category");   // removed as per github copilot code review
// Get the category grid container element
const catGrid = document.getElementById("cat-grid");
// Get the text element that displays the current status
const statusText = document.getElementById("status-text");
// Get the Start Quiz button
const startBtn = document.getElementById("start-btn");

// Best Scores
const bestScoreBox = document.getElementById("best-score-box");

// Function that updates the best score banner
// It is called upon selection of each category
function updateBestScoreBanner(category) {
  // refresh best score data on category selection to avoid stale localStorage values
  // code removed and add here as per github copilot review
  const bestScores = JSON.parse(localStorage.getItem("tq_best_scores") || "{}");

  // If there is no banner in HTML, exit
  if (!bestScoreBox) return;

  const data = bestScores[category];

  if (data) {
    // There is a best score for this category - display it
    bestScoreBox.style.display = "flex";
    document.getElementById("best-pct").textContent = data.pct + "%";
    document.getElementById("best-fraction").textContent =
      data.score + " / " + data.total;
    // "driving-times" -> "driving times"
    document.getElementById("best-cat").textContent = category.replace(
      /-/g,
      " ",
    );
    document.getElementById("best-date").textContent = data.date;
  } else {
    // There is no best score for this category - hide banner
    bestScoreBox.style.display = "none";
  }
}

// On load, the banner is hidden (no category selected yet)
if (bestScoreBox) {
  bestScoreBox.style.display = "none";
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
    // // Hide the banner when no category is selected
    if (bestScoreBox) bestScoreBox.style.display = "none";
  } else {
    btn.classList.add("selected");
    btn.setAttribute("aria-pressed", "true");

    statusText.textContent = btn.textContent.trim() + " selected";
    startBtn.disabled = false;

    // Save selected category
    localStorage.setItem("tq_category", btn.dataset.cat);

    updateBestScoreBanner(btn.dataset.cat);
  }
});

// Start Quiz button handler
startBtn.addEventListener("click", function () {
  const category = localStorage.getItem("tq_category");
  if (!category) return;

  // Reset quiz progress
  localStorage.setItem("tq_questionIndex", "0");
  localStorage.setItem("tq_score", "0");
  localStorage.removeItem("tq_answers");

  // Navigate to quiz page
  window.location.href = "quiz.html";
});
