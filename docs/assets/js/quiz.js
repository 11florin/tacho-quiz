"use strict";

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
questions = questions.sort(() => Math.random() - 0.5);

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

function loadQuestion() {
  if (questionIndex >= total) {
    // quiz complete - go to score
    localStorage.setItem("tq_score", score);
    localStorage.setItem("tq_total", total);
    localStorage.setItem("tq_answers", JSON.stringify(answeredQuestions));
    window.location.href = "score.html";
    return;
  }
  // Load and render current question and its answers
  const q = questions[questionIndex];
  questionCounter.textContent = `Question ${questionIndex + 1} of ${total}`;
  questionText.textContent = q.question;
  answersList.innerHTML = "";
  nextBtn.disabled = true;
  explanationBox.style.display = "none";
  nextBtn.textContent =
    questionIndex === total - 1 ? "SEE RESULTS" : "NEXT QUESTION";

  let i = 0;
  while (i < q.answers.length) {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.dataset.index = i;
    btn.innerHTML = `<span class="answer-label">${LABELS[i]}.</span> ${q.answers[i]}`;
    answersList.appendChild(btn);
    i++;
  }

}

// Handle clicks on any answer button using event delegation on the answers list container
answersList.addEventListener("click", function (e) {
  const btn = e.target.closest(".answer-btn");
  if (!btn || btn.disabled) {
    return;
  }
  const chosen = parseInt(btn.dataset.index, 10);
  const correct = questions[questionIndex].correct;

  // Disable all answer buttons
  const allBtns = answersList.querySelectorAll(".answer-btn");
  let i = 0;
  while (i < allBtns.length) {
    allBtns[i].disabled = true;
    i++;
  }

  // Higlight correct  / wrong
  btn.classList.add(chosen === correct ? "correct" : "wrong");
  allBtns[correct].classList.add("correct");

  if (chosen === correct) {
    score++;
  }

  // Instant feedback
  explanationBox.style.display = "block";
  explanationBox.textContent = questions[questionIndex].explanation;

  // Save answer for score page
  answeredQuestions.push({
    question: questions[questionIndex].question,
    chosen: chosen,
    correct: correct,
    answers: questions[questionIndex].answers,
    explanation: questions[questionIndex].explanation,
  });
  nextBtn.disabled = false;
});

//   Update progress and load next question
nextBtn.addEventListener("click", function () {
  questionIndex++;
  localStorage.setItem("tq_questionIndex", questionIndex);
  localStorage.setItem("tq_score", score);
  localStorage.setItem("tq_answers", JSON.stringify(answeredQuestions));
  localStorage.removeItem("tq_saved");
  loadQuestion();
});

loadQuestion();
