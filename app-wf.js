/**
 * Example store structure
 */
const STORE = {
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  view: 'home',
  submittedAnswer: false,
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the capital of Italy?',
      answers: [
        'A. Naples',
        'B. Rome',
        'C. Milan',
        'D. Genoa'
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the capital of Madagascar?',
      answers: [
        'A. Toliary',
        'B. Paris',
        'C. Antananarivo',
        'D. Mahajanga'
      ],
      correctAnswer: 2
    },
    {
      question: 'What is the capital of Chile?',
      answers: [
        'A. Santiago',
        'B. Castro',
        'C. Valdivia',
        'D. Temuco'
      ],
      correctAnswer: 'A. Santiago'
    },
    {
      question: 'What is the capital of India?',
      answers: [
        'A. Mumbai',
        'B. Chennai',
        'C. Dwarka',
        'D. New Delhi'
      ],
      correctAnswer: 'D. New Delhi'
    },
    {
      question: 'What is the capital of New Zealand?',
      answers: [
        'A. Auckland',
        'B. Dunedin',
        'C. Hamilton',
        'D. Wellington'
      ],
      correctAnswer: 'D. Wellington'
    },
    {
      question: 'What is the capital of Canada?',
      answers: [
        'A. Vancouver',
        'B. Ottawa',
        'C. Montreal',
        'D. Quebec'
      ],
      correctAnswer: 'B. Ottawa'
    },
    {
      question: 'What is the capital of Ireland?',
      answers: [
        'A. Galway',
        'B. Limerick',
        'C. Dublin',
        'D. Westport'
      ],
      correctAnswer: 'C. Dublin'
    },
    {
      question: 'What is the capital of Latvia?',
      answers: [
        'A. Sigulda',
        'B. Jelgava',
        'C. Ventspils',
        'D. Riga'
      ],
      correctAnswer: 'D. Riga'
    },
    {
      question: 'What is the capital of China?',
      answers: [
        'A. Shanghai',
        'B. Beijing',
        'C. Guangzhou',
        'D. Hong Kong'
      ],
      correctAnswer: 'B. Beijing'
    },
    {
      question: 'What is the capital of Norway?',
      answers: [
        'A. Oslo',
        'B. Bergen',
        'C. Tromso',
        'D. Kristiansand'
      ],
      correctAnswer: 'A. Oslo'
    }
  ],
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

// HTML for welcome page and provides start button
function welcomePage() {
  return `
  <div class="center">
  <p>Welcome to the quiz!</p>
  <p>How well do you know the world's countries and their capitals?</p> 
  <button id='startQuiz'> Start </button>
  </div>
  `
}

// Displays questions for user to answer
// Calls on function for displaying answers
function questionAsked() {
  const currentQuestion = STORE.questions[STORE.questionNumber]
  return `
  <div class="center">
    <p>${currentQuestion.question}</p>
  </div>
  `;
}


// Displays answers provided to user to choose from
function generateAnswers() {
  let answerList = '';
  const answerArray = STORE.questions[STORE.questionNumber].answers
  let i = 0;

  answerArray.forEach((answer, index) => {
    answerList += `
    <div class="center">
      <input type="radio" name="choice" value="${index}" required><label for="option">${answer}</label>
    </div>
    `;
    i++;
  });
  return answerList;
}


// Displays question # standing
function questionAndScoreStanding() {
  return `
  <div class="center">
    <button type="submit" id="submit-btn">Submit</button>
    <p>Question Number: ${STORE.questionNumber + 1} of ${STORE.questions.length}</p>
    <p>Score: ${STORE.score /*create different function to track #*/} of ${STORE.questions.length}</p>
  </div>
  `;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the 
// contents of the <main> tag based on the state of the STORE.
function render() {
  let content = '';
  if (STORE.view === 'home') {
    $('main').html(welcomePage());
  }
  else if (STORE.view === 'question') {
    content = questionAsked();
    content += generateAnswers();
    content += questionAndScoreStanding();
    $('main').html(`<form>${content}</form>`);
  } 
}


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Toggled when startQuiz button is clicked
function handleStartQuiz() {
  $('main').on('click', '#startQuiz', function (event) {
    STORE.view = 'question';
    console.log('Welcome! Quiz Started!');
    render();
  })
}

// Renders each event handler function
function main() {
  handleStartQuiz();
  render();
}

$(main);