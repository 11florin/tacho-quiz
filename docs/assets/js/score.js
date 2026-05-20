"use strict"

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