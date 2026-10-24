// ======================================================
// QUESTIONS
// ======================================================

const questions = [
  // ======================================================
  // WEB FUNDAMENTALS — 1–2
  // ======================================================

  {
    question: "What are the respective roles of HTML, CSS, and JavaScript?",
    choices: [
      "Structure, presentation, and behavior.",
      "Presentation, behavior, and structure.",
      "Behavior, structure, and presentation.",
      "Structure, database management, and presentation."
    ],
    answer: 0,
    explanation: "HTML structures the content, CSS controls its presentation, and JavaScript adds behavior and interactivity."
  },
  {
    question: "Which statement correctly describes communication between a browser and a web server?",
    choices: [
      "The server displays the page directly on the user's screen.",
      "The browser sends an HTTP request, and the server returns an HTTP response.",
      "The browser must store the server's database.",
      "The browser and server must use the same programming language."
    ],
    answer: 1,
    explanation: "The browser requests resources. The server processes requests and returns responses, which the browser interprets."
  },

  // ======================================================
  // HTML — 3–8
  // ======================================================

  {
    question: "Which statement correctly describes the structure of an HTML document?",
    choices: [
      "<head> contains visible content, while <body> contains metadata.",
      "<title> must be placed inside <body>.",
      "<head> contains metadata, while <body> contains visible page content.",
      "<body> must be placed inside <head>."
    ],
    answer: 2,
    explanation: "The head contains information such as the title and character encoding. The body contains the displayed content."
  },
  {
    question: "What is the difference between id and class?",
    choices: [
      "An id can be shared, but a class must be unique.",
      "An element cannot have both.",
      "They can only be applied to div elements.",
      "An id should be unique in the document, while a class can be shared."
    ],
    answer: 3,
    explanation: "An id identifies a particular element. Classes group elements, often so they can share CSS rules."
  },
  {
    question: "Which code creates a link to a section with id=\"contact\" on the same page?",
    choices: [
      "<a href=\"#contact\">Contact</a>",
      "<a src=\"#contact\">Contact</a>",
      "<a href=\"contact\">Contact</a>",
      "<a id=\"contact\">Contact</a>"
    ],
    answer: 0,
    explanation: "An internal link uses href with # followed by the destination element's id."
  },
  {
    question: "What do src and alt specify in an <img> element?",
    choices: [
      "The image width and height.",
      "The image location and its alternative text.",
      "The image caption and its hyperlink.",
      "Two different image locations."
    ],
    answer: 1,
    explanation: "src points to the image resource. alt supplies a text alternative for the image's information."
  },
  {
    question: "Which statement about HTML tables is correct?",
    choices: [
      "<td> creates a row, and <tr> creates a data cell.",
      "rowspan makes a cell span several columns.",
      "<tr> creates a row, <th> creates a header cell, and colspan spans columns.",
      "<th> must always be placed outside <tr>."
    ],
    answer: 2,
    explanation: "Rows use tr, header cells use th, and data cells use td. colspan spans columns; rowspan spans rows."
  },
  {
    question: "Which element is most appropriate for an independently understandable blog post?",
    choices: [
      "<nav>",
      "<span>",
      "<header>",
      "<article>"
    ],
    answer: 3,
    explanation: "article represents self-contained content. section represents a thematic grouping within a document."
  },
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