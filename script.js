const questions = [

{
question:"Which language is primarily used for web page structure?",
answers:[
{text:"HTML",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false},
{text:"C++",correct:false}
]
},

{
question:"Which CSS property changes text color?",
answers:[
{text:"font-size",correct:false},
{text:"background",correct:false},
{text:"color",correct:true},
{text:"margin",correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Microsoft",correct:false},
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"Apple",correct:false}
]
},

{
question:"What does API stand for?",
answers:[
{text:"Application Programming Interface",correct:true},
{text:"Advanced Program Internet",correct:false},
{text:"Application Process Integration",correct:false},
{text:"Automated Programming Input",correct:false}
]
},

{
question:"Which symbol is used for comments in JavaScript?",
answers:[
{text:"//",correct:true},
{text:"<!-- -->",correct:false},
{text:"#",correct:false},
{text:"**",correct:false}
]
}

];

const questionElement =
document.getElementById("question");

const answerButtons =
document.getElementById("answer-buttons");

const nextButton =
document.getElementById("next-btn");

const questionNumber =
document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

currentQuestionIndex = 0;
score = 0;

nextButton.innerHTML = "Next Question";

showQuestion();

}

function showQuestion(){

resetState();

let currentQuestion =
questions[currentQuestionIndex];

let questionNo =
currentQuestionIndex + 1;

questionNumber.innerHTML =
`Question ${questionNo} of ${questions.length}`;

questionElement.innerHTML =
currentQuestion.question;

currentQuestion.answers.forEach(answer => {

const button =
document.createElement("button");

button.innerHTML = answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct = answer.correct;
}

button.addEventListener("click",
selectAnswer);

});

}

function resetState(){

nextButton.style.display = "none";

while(answerButtons.firstChild){

answerButtons.removeChild(
answerButtons.firstChild
);

}

}

function selectAnswer(e){

const selectedBtn = e.target;

const isCorrect =
selectedBtn.dataset.correct === "true";

if(isCorrect){

selectedBtn.classList.add("correct");

score++;

}
else{

selectedBtn.classList.add("wrong");

}

Array.from(answerButtons.children)
.forEach(button => {

if(button.dataset.correct === "true"){

button.classList.add("correct");

}

button.disabled = true;

});

nextButton.style.display = "block";

}

function showScore(){

resetState();

questionElement.innerHTML =

`🎉 You scored ${score}
out of ${questions.length}!`;

nextButton.innerHTML = "Play Again";

nextButton.style.display = "block";

}

function handleNextButton(){

currentQuestionIndex++;

if(currentQuestionIndex <
questions.length){

showQuestion();

}
else{

showScore();

}

}

nextButton.addEventListener("click", () => {

if(currentQuestionIndex <
questions.length){

handleNextButton();

}
else{

startQuiz();

}

});

startQuiz();
