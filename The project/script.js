let words = ["apple", "Avocado" , "banana", "mango","blueberry"];

document.querySelector("#wordList").textContent = "Choose from: " + words.join(", ");

let secret = words[Math.floor(Math.random() * words.length)];

let attempts = 0; // عدد المحاولات
let guessInput = document.querySelector("#guessInput");
let result = document.querySelector("#result");

document.querySelector("#guessBtn").addEventListener("click", function () {
    let guess = guessInput.value.trim().toLowerCase();
    attempts++;

    if (guess === secret) {
        result.textContent = "🎉 Correct! The word was: " + secret;
        result.style.color = "green";
    } else if (attempts >= 3) {
        result.textContent = "❌ Game Over! The word was: " + secret;
        result.style.color = "red";
    } else {
        result.textContent = "❌ Try again. Attempts left: " + (3 - attempts);
        result.style.color = "blue";
    }
});
