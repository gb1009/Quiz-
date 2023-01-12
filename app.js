const quizData = [
   {
       question: "1. Which language runs in a web browser?",
       a: "Java",
       b: "C",
       c: "Python",
       d: "Javascript",
       correct: "d",
   },
   {
       question: "2. What does CSS stand for?",
       a: "Central Style Sheets",
       b: "Cascading Style Sheets",
       c: "Cascading Simple Sheets",
       d: "Cars SUVs Sailboats",
       correct: "b",
   },
   {
       question: "3. What does HTML stand for?",
       a: "Hypertext Markup Language",
       b: "Hypertext Markdown Language",
       c: "Hyperloop Machine Language",
       d: "Helicopters Terminals Motorboats Lamborginis",
       correct: "a",
   },
   {
       question: "4. What year was JavaScript launched?",
       a: "1996",
       b: "1995",
       c: "1994",
       d: "None of the above",
       correct: "b",
   },
   {
       question: "5. Javascript is an _______ language.",
       a: "Object-oriented",
       b: "Object-based",
       c: "Procedural",
       d: "None of the above",
       correct: "a",
   },
   {
       question: "6. Which of the following keywords is used to define a variable in Javascript?",
       a: "var",
       b: "let",
       c: "Both A and B",
       d: "None of the above",
       correct: "c",
   },
   {
       question: "7. HTML files are by default saved with the extension ______.",
       a: ".html",
       b: ".h",
       c: ".ht",
       d: ".ml",
       correct: "a",
   },
   {
       question: "8. Which attribute is used to provide a unique name to an HTML element?",
       a: "id",
       b: "class",
       c: "type",
       d: "None of the above",
       correct: "a",
   },
   {
       question: "9. In how many ways can CSS be written in?",
       a: "1",
       b: "2",
       c: "3",
       d: "4",
       correct: "c",
   },
   {
       question: "10. What type of CSS is generally recommended for designing large web pages?",
       a: "Inline",
       b: "Internal",
       c: "External",
       d: "None of the above",
       correct: "c",
   },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
   deselectAnswers()
   const currentQuizData = quizData[currentQuiz]
   questionEl.innerText = currentQuizData.question
   a_text.innerText = "A. " + currentQuizData.a
   b_text.innerText = "B. " + currentQuizData.b
   c_text.innerText = "C. " + currentQuizData.c
   d_text.innerText = "D. " + currentQuizData.d
}
function deselectAnswers() {
   answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
   let answer
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })
   return answer
}
submitBtn.addEventListener('click', () => {
   const answer = getSelected()
   if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }
      currentQuiz++
      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
          `
      }
   }
})

