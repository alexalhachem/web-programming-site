// ======================================================
// QUESTIONS
// ======================================================

let total = 0; // how many questions (from the server)
const cache = {}; // cache[i] = a fetched question object

async function getQuestion(index) { 
    // 1. If this question is already in cache, return the cached copy
    // 2. Otherwise fetch it from `/api/question/${index}` (relative URL)
    // 3. Check response.ok; if the request failed, throw an error
    // 4. Read the JSON, store it in cache[index], and return it
    if(cache[index]){
        return cache[index];
    }
    
    const response = await fetch(`/api/question/${index}`);

    if(!response.ok){
        throw new Error("Failed to fetch question");
    }

    const question = await response.json();
    cache[index] = question;

    return question;
}

async function init() { 
    // 1. Fetch the question count from "/api/questions/count" 
    // 2. Check response.ok; if the request failed, throw an error
    // 3. Read the JSON and set total to the count 
    // 4. await renderQuestion() to show the first question
    const response = await fetch(`/api/questions/count`);

    if(!response.ok){
        throw new Error("Failed to fetch count");
    }

    const data = await response.json();
    total = data.count;
    
    await renderQuestion();
}

// ======================================================
// APPLICATION STATE
// ======================================================
let currentQuestion = 0;
const userAnswers = []; // the length isn't known until you fetch the count

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
  if(currentQuestion >= total - 1) return;
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
  currentQuestion = total - 1;
  renderQuestion();
}

// ======================================================
// CALCULATE SCORE
// ======================================================
async function calculateScore() {
  let x = 0;
  for(let i = 0; i < total; i++){
    const q = await getQuestion(i);
    if(userAnswers[i] === q.answer) x++;
  }
  return x;
}

// ======================================================
// CALCULATE PERCENTAGE
// ======================================================
function calculatePercentage(score) {
  return Math.round((score*100)/total);
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
async function buildCorrection() {
  let correction = "";
  let o;
  let correctness;
  let youranswer;

  for(let i = 0; i < total; i++){
    correctness = "Incorrect";
    youranswer = "Not Answered";
    o = await getQuestion(i);
    if(userAnswers[i] === o.answer) correctness = "Correct";
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
async function submitQuiz() {
  const score = await calculateScore();
  const percentage = calculatePercentage(score);
  const message = getPerformanceMessage(percentage);
  const correction = await buildCorrection();
  showResults(score, percentage, message, correction);
}

async function renderQuestion() {

  const loading = document.getElementById("loading");
  const error = document.getElementById("error");

  let q;

  loading.hidden = false;
  error.hidden = true;

  try{
    q = await getQuestion(currentQuestion);
  } catch(err){
    error.textContent = err;
    error.hidden = false;
  } finally{
    loading.hidden = true;
  }

  // --------------------------------------------------
  // QUESTION NUMBER
  // --------------------------------------------------
  document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${total}`;

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
    currentQuestion === total - 1;
  document.getElementById("lastBtn").disabled =
    currentQuestion === total - 1;
}

// ======================================================
// DISPLAY RESULTS
// ======================================================
function showResults(score, percentage, message, correction) {
  document.getElementById("quizPanel").style.display = "none";
  document.getElementById("resultsPanel").style.display = "block";
  document.getElementById("scoreText").textContent =
    `Score: ${score} / ${total}`;
  document.getElementById("percentageText").textContent =
    `Percentage: ${percentage}%`;
  document.getElementById("performanceText").textContent = message;
  document.getElementById("correction").textContent = correction;
}

// ======================================================
// START APPLICATION
// ======================================================
init();