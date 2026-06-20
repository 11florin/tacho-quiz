"use strict"

// Read username saved during login
const user = localStorage.getItem("tq_user");

// Defensive design: if no username, redirect to login
if (!user) {
    alert("No login session found. Please log in first.");
    window.location.href = "login.html";
    throw new Error("No username found");
}