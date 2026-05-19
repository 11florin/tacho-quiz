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

// Reset index/score when quiz page loads
let questionIndex = 0;
let score = 0;
let answeredQuestions = [];

const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");
const nextBtn = document.getElementById("next-btn");
const explanationBox = document.getElementById("explanation-box");

