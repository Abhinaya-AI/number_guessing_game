let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("resultMessage");
  const attemptsDisplay = document.getElementById("attemptsLeft");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "❗ Please enter a valid number between 1 and 100.";
    return;
  }

  attempts--;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    disableInput();
  } else if (attempts === 0) {
    message.textContent = `💀 Game over! The number was ${secretNumber}.`;
    disableInput();
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
  } else {
    message.textContent = "📈 Too high!";
  }

  attemptsDisplay.textContent = `Attempts left: ${attempts}`;
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("resultMessage").textContent = "";
  document.getElementById("attemptsLeft").textContent = "Attempts left: 10";
}
