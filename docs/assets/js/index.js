"use strict";

// Get the category grid container element
const catGrid = document.getElementById("cat-grid");
// Get the text element that displays the current status
const statusText = document.getElementById("status-text");
// Get the Start Quiz button
const startBtn = document.getElementById("start-btn");

// Store the currently selected category button (none at the start)
let selectedBtn = null;

// Listen for clicks inside the category grid
catGrid.addEventListener("click", function (e) {
  // Find the nearest category button that was clicked
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;

  // Ensure only one button has the "selected" class at a time.
  // Remove "selected" from any other button (covers cases where state may be out of sync).
  const prev = document.querySelector(".cat-btn.selected");
  if (prev && prev !== btn) {
    prev.classList.remove("selected");
  }

  // Toggle selection for the clicked button
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
    selectedBtn = null;
    statusText.textContent = "Select a category to begin";
    startBtn.disabled = true;
  } else {
    btn.classList.add("selected");
    selectedBtn = btn;
    statusText.textContent = btn.textContent.trim() + " selected";
    startBtn.disabled = false;
  }
});
