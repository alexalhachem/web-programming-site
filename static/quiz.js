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

  // ======================================================
  // CSS — 9–16
  // ======================================================

  {
    question: "Which rule selects paragraphs with class=\"note\"?",
    choices: [
      "p.note { color: blue; }",
      "p .note { color: blue; }",
      "p, .note { color: blue; }",
      "p#note { color: blue; }"
    ],
    answer: 0,
    explanation: "p.note requires the element to be a paragraph with that class. A space means descendant, a comma groups selectors, and # selects an id."
  },
  {
    question: "What is the difference between div p and div > p?",
    choices: [
      "Both select only direct children.",
      "div p selects descendant paragraphs; div > p selects only direct child paragraphs.",
      "div p selects direct children; div > p selects all descendants.",
      "div > p selects paragraphs immediately after the div."
    ],
    answer: 1,
    explanation: "The descendant selector can match paragraphs nested at any depth. The child selector requires the immediate parent to be a div."
  },
  {
    question: "Which selector changes a link's style when the pointer is over it?",
    choices: [
      "a:visited",
      "a:link",
      "a:hover",
      "a::pointer"
    ],
    answer: 2,
    explanation: ":hover is a pseudo-class that matches the element's hover state."
  },
  {
    question: "These are the only color rules in the stylesheet. What color is the paragraph?\n\np { color: green; }\n.note { color: blue; }\n#message { color: red; }\n\n<p id=\"message\" class=\"note\">Hello</p>",
    choices: [
      "Green.",
      "Blue.",
      "Black.",
      "Red."
    ],
    answer: 3,
    explanation: "The id selector has greater specificity than the class selector and the element selector."
  },
  {
    question: "What is the correct order of the CSS box model from inside to outside?",
    choices: [
      "Content → padding → border → margin.",
      "Content → margin → border → padding.",
      "Content → border → padding → margin.",
      "Padding → content → margin → border."
    ],
    answer: 0,
    explanation: "Padding surrounds the content, the border surrounds the padding, and margin provides space outside the border."
  },
  {
    question: "With content-box sizing, what is the total width including margins?\n\ndiv {\n  width: 200px;\n  padding: 10px;\n  border: 2px solid black;\n  margin: 5px;\n}",
    choices: [
      "217px.",
      "234px.",
      "224px.",
      "230px."
    ],
    answer: 1,
    explanation: "Total width = 200 + 20 padding + 4 border + 10 margin = 234px. Include both left and right sides."
  },
  {
    question: "Which statement correctly compares relative and absolute positioning?",
    choices: [
      "Both remove the element from normal flow.",
      "Absolute positioning always uses the viewport as its reference.",
      "Relative positioning preserves the original layout space; absolute positioning removes the element from normal flow.",
      "Relative positioning prevents the use of top and left."
    ],
    answer: 2,
    explanation: "Relative positioning visually offsets an element while retaining its original space. Absolute positioning removes it from normal flow."
  },
  {
    question: "When does this media query apply?\n\n@media screen and (max-width: 600px) {\n  body { font-size: 14px; }\n}",
    choices: [
      "Only when printing.",
      "When the viewport is at least 600px wide.",
      "Only when the viewport is exactly 600px wide.",
      "On screens when the viewport is 600px wide or less."
    ],
    answer: 3,
    explanation: "screen specifies the media type. max-width defines an inclusive upper width limit."
  },

  // ======================================================
  // HTML FORMS — 17–24
  // ======================================================

  {
    question: "What do action and method specify in an HTML form?",
    choices: [
      "action specifies the destination URL; method specifies the HTTP method.",
      "action specifies the HTTP method; method specifies the destination URL.",
      "action specifies the submit button text; method specifies the input type.",
      "Both specify how fields are displayed."
    ],
    answer: 0,
    explanation: "The browser sends the form data to the action URL using the specified method, usually GET or POST."
  },
  {
    question: "How is form data normally sent with GET compared with POST?",
    choices: [
      "GET sends it in the body; POST sends it in the URL.",
      "GET sends it in the URL query; POST sends it in the request body.",
      "Both always send it in the URL.",
      "POST automatically encrypts the data."
    ],
    answer: 1,
    explanation: "GET places form data in the query string. POST places it in the request body. POST alone does not provide encryption."
  },
  {
    question: "An input has id=\"email\" but no name attribute. What happens to its value during ordinary form submission?",
    choices: [
      "It is submitted under the key email.",
      "It is submitted under the key id.",
      "It is omitted from the submitted form data.",
      "The entire form becomes invalid."
    ],
    answer: 2,
    explanation: "The name attribute supplies the submitted field key. An id identifies the element but does not replace name."
  },
  {
    question: "Which label is correctly associated with this input?\n\n<input id=\"studentName\" name=\"fullname\" type=\"text\">",
    choices: [
      "<label for=\"fullname\">Name</label>",
      "<label name=\"studentName\">Name</label>",
      "<label href=\"#studentName\">Name</label>",
      "<label for=\"studentName\">Name</label>"
    ],
    answer: 3,
    explanation: "The label's for attribute must match the input's id."
  },
  {
    question: "Which setup allows one selected option from a group of choices?",
    choices: [
      "Radio buttons in the same form with the same name.",
      "Checkboxes with different names.",
      "Radio buttons with different names.",
      "Text inputs with the same id."
    ],
    answer: 0,
    explanation: "Radio buttons sharing a name form a selection group. Checkboxes allow multiple selections."
  },
  {
    question: "What is the submission difference between readonly and disabled for named text inputs?",
    choices: [
      "Neither is submitted.",
      "An enabled readonly input is submitted; a disabled input is omitted.",
      "A disabled input is submitted; a readonly input is omitted.",
      "Both are always submitted."
    ],
    answer: 1,
    explanation: "readonly prevents normal editing. disabled makes the control unavailable and excludes it from ordinary submission."
  },
  {
    question: "Which input requires a value containing exactly three letters?",
    choices: [
      "<input type=\"text\" size=\"3\" required>",
      "<input type=\"text\" maxlength=\"3\">",
      "<input type=\"text\" pattern=\"[A-Za-z]{3}\" required>",
      "<input type=\"text\" placeholder=\"ABC\" required>"
    ],
    answer: 2,
    explanation: "The pattern requires three letters, and required prevents an empty value. size controls width; maxlength only sets an upper length limit."
  },
  {
    question: "Which statement correctly distinguishes <select> from <datalist>?",
    choices: [
      "Both always restrict users to the listed values.",
      "A datalist replaces the input element.",
      "A select allows arbitrary typed values by default.",
      "A select offers defined options; a datalist supplies suggestions to an input that can accept another value."
    ],
    answer: 3,
    explanation: "An input connects to a datalist through its list attribute. The datalist itself does not restrict input to its suggestions."
  },

  // ======================================================
  // JAVASCRIPT — 25–40
  // ======================================================

  {
    question: "In const price = 10;, which statement is correct?",
    choices: [
      "const is a declaration keyword, price is an identifier, and 10 is a literal.",
      "const is a literal, price is a keyword, and 10 is an identifier.",
      "The value 10 is not a literal because it is assigned to a variable.",
      "price is a string literal."
    ],
    answer: 0,
    explanation: "A literal directly expresses a value. const declares a binding that cannot be reassigned."
  },
  {
    question: "What happens here?\n\nconst numbers = [1, 2, 3];\nnumbers[0] = 10;\nnumbers.push(4);",
    choices: [
      "The first assignment throws an error.",
      "numbers becomes [10, 2, 3, 4].",
      "numbers remains [1, 2, 3].",
      "push throws an error because the array uses const."
    ],
    answer: 1,
    explanation: "const prevents reassignment of numbers to another value. It does not prevent modifying the referenced array."
  },
  {
    question: "What is stored in message?\n\nlet score = 8;\nconst message = `Score: ${score + 1}`;",
    choices: [
      "\"Score: 81\"",
      "\"Score: ${score + 1}\"",
      "\"Score: 9\"",
      "\"Score: 8\""
    ],
    answer: 2,
    explanation: "Template literals evaluate expressions inside ${...}. Since score is numeric, score + 1 gives 9."
  },
  {
    question: "What is printed?\n\nconsole.log(5 == \"5\", 5 === \"5\");",
    choices: [
      "false, false",
      "true, true",
      "false, true",
      "true, false"
    ],
    answer: 3,
    explanation: "== performs type conversion here. === does not, so a number and a string are not strictly equal."
  },
  {
    question: "What is the final value of total?\n\nlet total = 0;\nfor (let i = 1; i <= 4; i++) {\n  total += i;\n}",
    choices: [
      "10",
      "6",
      "4",
      "15"
    ],
    answer: 0,
    explanation: "The loop adds 1, 2, 3, and 4, giving 10."
  },
  {
    question: "Which statement correctly distinguishes for...in from for...of?",
    choices: [
      "Both give the values stored in an array.",
      "for...in gives enumerable property names; for...of gives values from an iterable.",
      "for...in gives values; for...of gives property names.",
      "for...of works only with plain objects."
    ],
    answer: 1,
    explanation: "For an ordinary array, for...in provides keys such as '0'. for...of provides the actual elements."
  },
  {
    question: "What are part and the final numbers array?\n\nconst numbers = [10, 20, 30, 40];\nconst part = numbers.slice(1, 3);\nnumbers.splice(1, 1);",
    choices: [
      "part = [20]; numbers = [10, 30, 40].",
      "part = [20, 30, 40]; numbers = [10, 40].",
      "part = [20, 30]; numbers = [10, 30, 40].",
      "part = [20, 30]; numbers = [10, 20, 30, 40]."
    ],
    answer: 2,
    explanation: "slice copies indexes 1 and 2 without changing the original. splice then removes one element at index 1."
  },
  {
    question: "What are doubled and evens?\n\nconst nums = [1, 2, 3, 4];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);",
    choices: [
      "doubled = [2, 4]; evens = [2, 4, 6, 8].",
      "doubled = 20; evens = 6.",
      "doubled = [2, 4, 6, 8]; evens = [false, true, false, true].",
      "doubled = [2, 4, 6, 8]; evens = [2, 4]."
    ],
    answer: 3,
    explanation: "map transforms each element. filter keeps only elements satisfying its condition. These callbacks leave nums unchanged."
  },
  {
    question: "What is total?\n\nconst nums = [2, 4, 6];\nconst total = nums.reduce((sum, n) => sum + n, 0);",
    choices: [
      "12",
      "[2, 4, 6]",
      "6",
      "[0, 2, 6, 12]"
    ],
    answer: 0,
    explanation: "reduce accumulates one result. Starting at 0, it adds 2, 4, and 6."
  },
  {
    question: "What value does calculate(5) return?\n\nfunction calculate(x, y = 2) {\n  return x * y;\n}",
    choices: [
      "5",
      "10",
      "undefined",
      "NaN"
    ],
    answer: 1,
    explanation: "The omitted second argument uses the default y = 2. The function returns 5 × 2."
  },
  {
    question: "What is the difference between showResult and showResult() when showResult is a function?",
    choices: [
      "Both call the function.",
      "showResult calls it; showResult() refers to it.",
      "showResult refers to the function; showResult() calls it.",
      "Parentheses are optional when calling a function."
    ],
    answer: 2,
    explanation: "Accessing the function name gives the function itself. Parentheses invoke it."
  },
  {
    question: "Which arrow function correctly returns the square of n?",
    choices: [
      "const square = n => { n * n; };",
      "const square = n -> n * n;",
      "const square = (n * n) => n;",
      "const square = n => n * n;"
    ],
    answer: 3,
    explanation: "An expression-bodied arrow function implicitly returns its expression. A block body needs an explicit return statement."
  },
  {
    question: "What are number and person.age after the function call?\n\nlet number = 5;\nconst person = { age: 20 };\nfunction update(n, p) {\n  n = 10;\n  p.age = 21;\n}\nupdate(number, person);",
    choices: [
      "number = 5; person.age = 21.",
      "number = 10; person.age = 21.",
      "number = 5; person.age = 20.",
      "number = 10; person.age = 20."
    ],
    answer: 0,
    explanation: "Reassigning the local parameter n does not change number. The parameter p references the same object as person, so the property change is visible."
  },
  {
    question: "What does person.fullName() return?\n\nconst person = {\n  firstName: \"John\",\n  lastName: \"Doe\",\n  fullName: function() {\n    return this.firstName + \" \" + this.lastName;\n  }\n};",
    choices: [
      "\"firstName lastName\"",
      "\"John Doe\"",
      "\"JohnDoe\"",
      "undefined"
    ],
    answer: 1,
    explanation: "In this method call, this refers to person. The method combines its two properties with a space."
  },
  {
    question: "Which code correctly defines Student as a subclass of Person and initializes the inherited name?",
    choices: [
      "class Student implements Person {\n  constructor(name) { super(name); }\n}",
      "class Student extends Person {\n  constructor(name) { this.name = name; }\n}",
      "class Student extends Person {\n  constructor(name) { super(name); }\n}",
      "class Student inherits Person {\n  constructor(name) { Person(name); }\n}"
    ],
    answer: 2,
    explanation: "extends creates inheritance. super(name) invokes the parent constructor, which must run before accessing this in a derived constructor."
  },
  {
    question: "Which statement about getters, setters, and private fields is correct?",
    choices: [
      "A setter is invoked only by calling person.name(value).",
      "An underscore makes a property inaccessible outside its class.",
      "A getter must be invoked using parentheses.",
      "person.name = value can invoke a setter, and a declared #name field is private."
    ],
    answer: 3,
    explanation: "Accessors use property syntax. A declared # field enforces privacy, while an underscore is only a naming convention."
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