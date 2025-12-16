let secretNumber = Math.floor(Math.random() * 20) + 1;
let tries = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");

  if (!guess) {
    message.innerText = "⛔ Please enter a number!";
    return;
  }

  tries++;

  if (guess === secretNumber) {
    message.innerText = "🎉 Correct! You guessed it!";
  } else if (guess > secretNumber) {
    message.innerText = "📉 Too high!";
  } else {
    message.innerText = "📈 Too low!";
  }

  attempts.innerText = `Attempts: ${tries}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  tries = 0;
  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "";
  document.getElementById("guessInput").value = "";
}
