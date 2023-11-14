// script.js
const correctAnswer = "harry potter"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("correct").innerHTML = '<h1>Congratulations! You solved the riddle. Clue: NOTICE BOARD </h1>';
        
    } else {
        document.getElementById("correct").innerHTML = '<h1>Oops.Try again</h1>';
    }
}