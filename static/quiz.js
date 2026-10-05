// ======================================================
// QUESTIONS
// ======================================================
const questions = [
  {
    question: "how are you",
    choices: ["good", "okay", "bad", "dying"],
    answer: 1,
    explanation: "Being okay is the correct lifestyle"
  },
  {
    question: "Do you like the course",
    choices: ["yes", "no", "maybe", "idk"],
    answer: 0,
    explanation: "You should like the course in order to pass with a remarkable grade"
  }
];

// ======================================================
// APPLICATION STATE
// ======================================================
let currentQuestion = 0;
const userAnswers = new Array(questions.length);

// ======================================================
// SAVE AN ANSWER
// ======================================================
function saveAnswer(choiceIndex) {
  userAnswers[currentQuestion] = choiceIndex;
}

// ======================================================
// NAVIGATION
// ======================================================
function goNext() {
  if(currentQuestion >= questions.length - 1) return;
  currentQuestion ++;
  renderQuestion();
}

function goPrevious() {
  if(currentQuestion <= 0) return;
  currentQuestion --;
  renderQuestion();
}

function goFirst() {
  currentQuestion = 0;
  renderQuestion();
}
function goLast() {
  currentQuestion = questions.length - 1;
  renderQuestion();
}

// ======================================================
// CALCULATE SCORE
// ======================================================
function calculateScore() {
  let x = 0;
  for(let i in questions){
    if(userAnswers[i] === questions[i].answer) x++;
  }
  return x;
}

// ======================================================
// CALCULATE PERCENTAGE
// ======================================================
function calculatePercentage(score) {
  return Math.round((score*100)/questions.length);
}

// ======================================================
// PERFORMANCE MESSAGE
// ======================================================
function getPerformanceMessage(percentage) {
  switch(true){
    default: return "N/A";
    case percentage < 50: return "Needs improvement";
    case percentage >= 50 && percentage <= 59: return "Pass";
    case percentage >= 60 && percentage <= 79: return "Good";
    case percentage >= 80 && percentage <=100: return "Excellent";
  }
}

// ======================================================
// BUILD CORRECTION
// ======================================================
function buildCorrection() {
  let correction = "";
  let o;
  let correctness;
  let youranswer;

  for(let i = 0; i < questions.length; i++){
    correctness = "Incorrect";
    youranswer = "Not Answered";
    o = questions[i];
    if(userAnswers[i] === questions[i].answer) correctness = "Correct";
    if(o.choices[userAnswers[i]] !== undefined) youranswer = `${o.choices[userAnswers[i]]}`;
    correction += `
    Question ${i+1}: ${o.question}\n
    Your answer: ${youranswer}\n
    Correct answer: ${o.choices[o.answer]}\n
    Result: ${correctness}\n
    Explanation: ${o.explanation}\n
    `;
  }

  return correction;
}

// ======================================================
// PROVIDED INTERFACE CODE
//
// DOM manipulation and events will be studied later.
// ======================================================

// ======================================================
// SUBMIT QUIZ
// ======================================================
function submitQuiz() {
  const score = calculateScore();
  const percentage = calculatePercentage(score);
  const message = getPerformanceMessage(percentage);
  const correction = buildCorrection();
  showResults(score, percentage, message, correction);
}

function renderQuestion() {
  const q = questions[currentQuestion];

  // --------------------------------------------------
  // QUESTION NUMBER
  // --------------------------------------------------
  document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  // --------------------------------------------------
  // QUESTION
  // --------------------------------------------------
  document.getElementById("questionText").textContent = q.question;

  // --------------------------------------------------
  // CHOICES
  // --------------------------------------------------
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  for (let i = 0; i < q.choices.length; i++) {
    const label = document.createElement("label");
    label.className = "choice";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = i;
    // Restore an answer previously selected
    // by the user.
    if (userAnswers[currentQuestion] === i) {
      radio.checked = true;
    }
    // When the user selects this answer,
    // save its index.
    radio.onclick = function () {
      saveAnswer(i);
    };
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + q.choices[i]));
    choicesContainer.appendChild(label);
  }

  // --------------------------------------------------
  // NAVIGATION BUTTONS
  // --------------------------------------------------
  document.getElementById("firstBtn").disabled = currentQuestion === 0;
  document.getElementById("previousBtn").disabled = currentQuestion === 0;
  document.getElementById("nextBtn").disabled =
    currentQuestion === questions.length - 1;
  document.getElementById("lastBtn").disabled =
    currentQuestion === questions.length - 1;
}

// ======================================================
// DISPLAY RESULTS
// ======================================================
function showResults(score, percentage, message, correction) {
  document.getElementById("quizPanel").style.display = "none";
  document.getElementById("resultsPanel").style.display = "block";
  document.getElementById("scoreText").textContent =
    `Score: ${score} / ${questions.length}`;
  document.getElementById("percentageText").textContent =
    `Percentage: ${percentage}%`;
  document.getElementById("performanceText").textContent = message;
  document.getElementById("correction").textContent = correction;
}

// ======================================================
// START APPLICATION
// ======================================================
renderQuestion();
