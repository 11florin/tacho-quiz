'use strict'

// Quiz Logic
const LABELS = ["A", "B", "C", "D"];

const category = localStorage.getItem("tq_category");

// If no category chosen, redirect home
if (!category) {
    window.location.href = "index.html";
}

// Filter question by category
let questions = QUESTIONS.filter((q) => q.category === category);

// Shuffle questions (random order)
questions = questions.sort(() => Math.random() -0.5);

// Select only 10 question (more to be added in the future)
questions = questions.slice(0, 10);

const total = questions.length;

