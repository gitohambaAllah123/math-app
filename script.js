let currentAnswer = 0;
let score = 0;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  currentAnswer = num1 + num2;

  document.getElementById("question").textContent = `Berapakah ${num1} + ${num2} ?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === currentAnswer) {
    document.getElementById("feedback").textContent = "✅ Benar!";
    score += 1;
  } else {
    document.getElementById("feedback").textContent = `❌ Salah. Jawaban benar: ${currentAnswer}`;
  }
  document.getElementById("score").textContent = `Skor: ${score}`;
  generateQuestion();
}

window.onload = generateQuestion;
