"use strict"

const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

// Hide error message at the begin 
errorMsg.style.display = "none";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    // Defensive validation
    if (user === "" || pass === "") {
        e.preventDefault(); // stop sending the form
        errorMsg.textContent = "Please enter both username and password."
        errorMsg.style.display = "block";
        return;
    }
    // Login fake
    localStorage.setItem("tq_user", user);

    window.location.href = "confirm.html";
});