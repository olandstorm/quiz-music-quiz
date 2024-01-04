import { questionArray, type IQuestionArray } from './questionArray.ts';
import './scss/style.scss'; // Importera huvud-SCSS-filen

/*

// GLOBAL VARIABLES 
// If the variable you need is of the local variety in another function, 
// talk to the person who made the variable, then move it to here instead. 
// But make sure the old function still works before merging! 

// TS definition of what the variable should contain + initial definition för the playerName
let playerName: string | null = null; 
const totalScore: number = 0; // TS type defined and set to 0. 
// Our array of 10 questions picked for the round, needs editing after Q-array. 
let questionsForRound: { question: string, answer1: string, answer2: string, answer3: string } [] ; 
// For saving the used questions, 
// later in IF statment make sure to include this as a check for "used question" when player wants to play round 2. 
let usedQuestions: { question: string, answer1: string, answer2: string, answer3: string } [] ; 

// Timer (might be it's own div/ section later) - parts: 
const timerContainer = document.getElementById('timerContainer');
let timer: any; // What we will loop out to the container. Will be altered by stopTime and startTime perhaps? 
const timerRun: boolean = false; // start and stop condition
let startTime: any = '00.00'; // mm:ss
let stopTime: any = '00.00' 

// Dessa skall inte nödvändigtvis vara globala sen men jag höll ändå på och tog med dem. 
const landingPage = document.getElementById('landingPage'); // For adding/ removing "hidden" from classlist.
const namePage = document.getElementById('namePage'); // For adding/ removing "hidden" from classlist.
const questionPage = document.getElementById('questionPage'); // For adding/ removing "hidden" from classlist.
const feedbackPage = document.getElementById('feedbackPage'); // For adding/ removing "hidden" from classlist.
const resultPage = document.getElementById('resultPage'); // For adding/ removing "hidden" from classlist.

// Landing page - parts: 
const readyBtn = document.getElementById('readyBtn');

// Name page - parts:
// Add eventlistener to take the value of the name input + error if empty. 
const runBtn = document.getElementById('runBtn'); 
const playerNameInput = document.getElementById('playerName'); 
// Assigns new value to the playerName (Should trigger when "runBtn" is clicked on). 
playerName = playerNameInput.value;  

// Question page - parts:
const questionForm = document.getElementById('questionForm');
const radioBtnContainer = document.getElementById('radioBtnContainer'); 
// Add click event x 3: enable answer btn (otherwise disabled) 
const answerRadioBtn1 = document.getElementById('answerRadioBtn1'); 
const answerRadioBtn2 = document.getElementById('answerRadioBtn2'); 
const answerRadioBtn3 = document.getElementById('answerRadioBtn3'); 
// Add click event: checking of answer is correct ect. 
const answerBtn = document.getElementById('answerBtn'); 
// h2 element targeted, we will change innerHTML by count +1 for every question.
const questionNumber = document.getElementById('questionNumber');  

// Feedback page - parts:
// For toggling "hidden" from classlist x2. 
// Note, this one is inside the feedbackPage container so that needs to be visible as well!
const correctAnswerContainer = document.getElementById('correctAnswerContainer'); 
const wrongAnswerContainer = document.getElementById('wrongAnswerContainer'); 
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
// targets the <p> in the wrongAnswerContainer so we can display the correct answer when player makes mistake.
const correctAnswer = document.getElementById('correctAnswer');

// Result page - parts: 
const totalScoreContainer = document.getElementById('totalScoreContainer');
// Btn for opening namePage(?) - yet to be determined? Maybe we need 2 buttons? "playAgain and newPlayer"? 
const playAgainBtn = document.getElementById('playAgainBtn'); 

*/

// -------------------RADIOBUTTONS AND ANSWERBUTTON------------------------------
// when any radioBtn is clicked, remove the disabled attribute from the answerBtn.
const answerBtn = document.getElementById('answerBtn');

function enableAnswerBtn(): boolean {
  answerBtn?.removeAttribute('disabled');
  return true;
}

// declare all radiobuttons in the questionform via class
const allRadioBtns = document.querySelectorAll('.answerRadioBtn');
// for each radiobutton, add an eventlistener which triggers the enableAnswerBtn function
allRadioBtns.forEach(radioBtn => {
  radioBtn.addEventListener('click', enableAnswerBtn);
});

// --------------------SAVE NAME FROM INPUT------------------------

// global variable for the name input on the namePage
const playerNameInput = document.querySelector('.playerName') as HTMLInputElement;
let savedPlayerName: string = ''; // declare the nameinput as initially empty

console.log(savedPlayerName);

/**
 * --------------------------------
 * -------------TIMER--------------
 * --------------------------------
 */

/* // An interface for the timer
interface ITimer {
  intervalId: number | null;
  seconds: number;
  minutes: number;
}

// Display the timer in the document
function updateTimer(timer: ITimer): void {
  console.log(`${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`);
}

// Adds the 0 before if the number < 0
function formatTime(time: number): string {
  return time < 10 ? `0${time}` : `${time}`;
}

// Function to start the timer
function startTimer(timer: ITimer): void {
  timer.intervalId = setInterval(() => {
    timer.seconds += 1;
    if (timer.seconds === 60) {
      timer.seconds = 0;
      timer.minutes += 1;
    }
    updateTimer(timer);
  }, 1000);
}

// Function to stop the timer
function stopTimer(timer: ITimer): void {
  if (timer.intervalId !== null) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
}

// Function to reset the timer
function resetTimer(timer: ITimer): void {
  stopTimer(timer);
  timer.seconds = 0;
  timer.minutes = 0;
  updateTimer(timer);
}

// Variable for the timer
const timer: Timer = {
  intervalId: null,
  seconds: 0,
  minutes: 0,
};

// To display the timer in the console
startTimer(timer);

// To test the stopTimer-function
setTimeout(() => {
  stopTimer(timer);
}, 7000);

// To test the resetTimer-function
setTimeout(() => {
  resetTimer(timer);
}, 8000);

// To get rid of error messages mostly
updateTimer(timer); */

// Variabler för de olika containers
const landingPage = document.getElementById('landingPage');
const namePage = document.getElementById('namePage');
const questionPage = document.getElementById('questionPage');
const feedbackPage = document.getElementById('feedbackPage');
const resultPage = document.querySelector('#resultPage');

// Variabler för knapparna

// Redoknapp - Landing page
const readyBtn = document.getElementById('readyBtn');
// Körknapp - Name page
const runBtn = document.getElementById('runBtn');
// Nästa fråga-knapp - Feedback page
const questionText = document.querySelector('#questionText');
// Gruppering av alla answer radio knapparna
const answerRadioBtn = document.querySelectorAll('.answerText');

// Nästa fråga-knapp - Feedback page
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
// Visa resultat-knapp - Feedback page
const showResultBtn = document.getElementById('showResultBtn');

// Events

// Click event to display the name page after user clicks on
// Condition to add evtlsnr if readyBtn exists in html
if (readyBtn !== null) {
  readyBtn.addEventListener('click', displayNamePage);
}

// Click event to trigger the start of the quiz after user clicks on
// Condition to add evtlsnr if runBtn exists in html
if (runBtn !== null) {
  runBtn.addEventListener('click', startQuiz);
}

// Click event to trigger next question
// Condition to add evtlsnr if nextQuestionBtn exists in html
if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', nextQuestion);
}

// Click event to trigger Result page
// Condition to add evtlsnr if showResultBtn exists in html
if (showResultBtn !== null) {
  showResultBtn.addEventListener('click', displayResultPage);
}

// variable for empty gameArray
let gameArray: any[] = [];
console.table(gameArray);

// Functions

// Function to display namepage when user klicks on readyBtn
function displayNamePage(): void {
  if (landingPage !== null && namePage !== null) {
    landingPage.classList.add('hidden');
    namePage.classList.remove('hidden');
  }

  // call on gameArray to copy original questionArray
  gameArray = [...questionArray];
  console.table(gameArray);
}
// Funktion som triggas när användare klickar på "kör" i namnsida
// Kallar även på fråge-funktion

function startQuiz(): void {
  if (namePage !== null && questionPage !== null) {
    namePage.classList.add('hidden');
    questionPage.classList.remove('hidden');
  }
  showQuestion();

  // if the name input is not empty let the savedPlayerName be the value of the input
  if (playerNameInput !== null) {
    // this will then be used to print out the name on the resultPage
    savedPlayerName = playerNameInput.value;
  }
  console.log(savedPlayerName);
}

// Funktion som visar en random fråga från arrayen, och
let currentQuestion: IQuestionArray;

// Randomize a question and return that question
function randomQuestion(): IQuestionArray {
  const randomQuestionId: number = Math.floor(Math.random() * gameArray.length);
  currentQuestion = gameArray[randomQuestionId];
  gameArray.splice(randomQuestionId, 1);
  return currentQuestion;
}

// Display that question in the HTML
function showQuestion(): void {
  randomQuestion();
  if (questionText !== null && answerRadioBtn !== null) {
    questionText.innerHTML = currentQuestion.question;
    for (let i = 0; i < answerRadioBtn.length; i++) {
      answerRadioBtn[i].innerHTML = currentQuestion.answers[i].answer;
    }
  }

  console.table(gameArray);
  console.table(questionArray);
}

// Check what the user har picked as answer in the form and return the index of that button
function checkAnswerInput(): number | null {
  const radioButtons = document.getElementsByName('answer');
  for (let i = 0; i < radioButtons.length; i++) {
    const radioButton = radioButtons[i] as HTMLInputElement;
    if (radioButton.checked) {
      console.log(i);
      return i;
    }
  }
  return null;
}

// Check the correct answer of the array of answers and return the index of that correct answer
function checkCorrectAnswer(): number | null {
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    if (currentQuestion.answers[i].correct) {
      console.log(i);
      return i;
    }
  }
  return null;
}

// Run a test of the users answer and the correct answer of the question and return a log of the answer
function isAnswerCorrect(): boolean {
  const userAnswerIndex = checkAnswerInput();
  const correctAnswerIndex = checkCorrectAnswer();
  return userAnswerIndex === correctAnswerIndex;
}

// Funktion för att dölja feedback page och gå vidare till nästa fråga
function nextQuestion(): void {
  if (feedbackPage !== null && questionPage !== null) {
    feedbackPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
  }
  showQuestion();
}

// DELETE WHEN MERGE IF NEEDED
let totalScore: number = 0; // TS type defined and set to 0.
// DELETE ABOVE IF NEEDED

// Function for displaying Result page
function displayResultPage(): void {
  const resultTitlePlayerName = document.querySelector('#resultTitlePlayerName');
  const totalScoreSpan = document.querySelector('#totalScore span');
  if (feedbackPage !== null && resultPage !== null && resultTitlePlayerName !== null && totalScoreSpan !== null) {
    feedbackPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    resultTitlePlayerName.innerHTML = savedPlayerName;
    totalScoreSpan.innerHTML = `${totalScore}`;
  }
}


function resetTotalScore(): void {
  totalScore = 0;
}

// DELETE WHEN MERGE IF NEEDED
resetTotalScore();

console.log(totalScore);
// DELETE ABOVE IF NEEDED

// eventlistener for answerBtn which displays the feedback page
answerBtn?.addEventListener('click', displayFeedbackPage);

// function displaying feedback page when answerBtn is clicked
function displayFeedbackPage(): void {
  if (feedbackPage !== null && questionPage !== null) {
    feedbackPage.classList.remove('hidden');
    questionPage.classList.add('hidden');
  }

  // local variable for the correctAnswerContainer
  const correctAnswerContainer = document.getElementById('correctAnswerContainer');
  // local variable for the wrongAnswerContainer
  const wrongAnswerContainer = document.getElementById('wrongAnswerContainer');
  // local variable for checking if answer is correct
  const rightAnswer = isAnswerCorrect();

  // check if the radioBtn answer is true
  if (rightAnswer) {
    // if answer is true, display the correctAnswerContainer styling
    correctAnswerContainer?.classList.remove('hidden');
    wrongAnswerContainer?.classList.add('hidden');
  } else {
    // if answer isn't true, display the wrongAnswerContainer styling
    correctAnswerContainer?.classList.add('hidden');
    wrongAnswerContainer?.classList.remove('hidden');
  }
}
