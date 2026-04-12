document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[id$='Quiz']");
  const nextBtn = document.getElementById("nextBtn");

  // Get all unique question names
  const questionNames = new Set();
  form.querySelectorAll("input[type=radio]").forEach(input => {
    questionNames.add(input.name);
  });
  const totalQuestions = questionNames.size;

  // Listen for changes to any radio input
  form.querySelectorAll("input[type=radio]").forEach(input => {
    input.addEventListener("change", function () {
      const answered = new Set();
      form.querySelectorAll("input[type=radio]:checked").forEach(checkedInput => {
        answered.add(checkedInput.name);
      });
      nextBtn.disabled = answered.size !== totalQuestions;
    });
  });
});

// Your submitQuiz function can remain as you already have:
function submitQuiz(subject) {
  const form = document.getElementById(subject + "Quiz");
  const inputs = form.querySelectorAll("input[type=radio]:checked");

  let score = 0;
  inputs.forEach(input => {
    score += Number(input.value);
  });

  const questionNames = new Set();
  form.querySelectorAll("input[type=radio]").forEach(input => {
    questionNames.add(input.name);
  });

  let totalScore = Number(sessionStorage.getItem("totalScore")) || 0;
  let totalQuestions = Number(sessionStorage.getItem("totalQuestions")) || 0;

  totalScore += score;
  totalQuestions += questionNames.size;

  sessionStorage.setItem("totalScore", totalScore);
  sessionStorage.setItem("totalQuestions", totalQuestions);

  // Navigation based on subject
  if (subject === "python") {
    window.location.href = "java-quiz.html";
  } else if (subject === "java") {
    window.location.href = "c-quiz.html";
  } else if (subject === "c") {
    window.location.href = "mrk-quiz.html";
  } else if (subject === "mrk") {
    window.location.href = "css.html";
  } else if (subject === "css") {
    window.location.href = "js.html";
  } else if (subject === "js") {
    window.location.href = "result.html";
  }
}