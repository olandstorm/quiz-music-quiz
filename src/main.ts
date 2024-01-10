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
  if (answerBtn === null) {
    return false;
  }
  answerBtn.removeAttribute('disabled');
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

/**
 * --------------------------------
 * -------------TIMER--------------
 * --------------------------------
 */

function toggleTimerContainer(): void {
  if (timerContainer === null) {
    return;
  }
  if (
    !(questionPage as HTMLElement).classList.contains('hidden') ||
    !(feedbackPage as HTMLElement).classList.contains('hidden')
  ) {
    timerContainer.classList.remove('hidden');
    timerContainer.classList.remove('resultTimer');
  } else if (!(resultPage as HTMLElement).classList.contains('hidden')) {
    timerContainer.classList.remove('hidden');
    timerContainer.classList.add('resultTimer');
  } else {
    timerContainer.classList.add('hidden');
    timerContainer.classList.remove('resultTimer');
  }
}

// An interface for the timer
interface ITimer {
  intervalId: number | null;
  seconds: number;
  minutes: number;
}

// Display the timer in the document
function updateTimer(timer: ITimer): void {
  // function for displaying the timer on the page
  const timerDisplay = document.querySelector('.timer');
  if (timerDisplay === null) {
    return;
  }
  // change the innerHTML of the timercontainer to display the actual timer
  timerDisplay.innerHTML = `${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`;
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
  if (timer.intervalId === null) {
    return;
  }
  clearInterval(timer.intervalId);
  timer.intervalId = null;
}

// Function to reset the timer
function resetTimer(timer: ITimer): void {
  stopTimer(timer);
  timer.seconds = 0;
  timer.minutes = 0;
  updateTimer(timer);
}

// Variable for the timer
const timer: ITimer = {
  intervalId: null,
  seconds: 0,
  minutes: 0,
};

// Variables for containers
const timerContainer = document.getElementById('timerContainer');
const landingPage = document.getElementById('landingPage');
const namePage = document.getElementById('namePage');
const questionPage = document.getElementById('questionPage');
const feedbackPage = document.getElementById('feedbackPage');
const resultPage = document.getElementById('resultPage');

// Variables for Buttons
const readyBtn = document.getElementById('readyBtn');
const runBtn = document.getElementById('runBtn');

const questionText = document.querySelector('#questionText');
const answerRadioBtn = document.querySelectorAll('.answerText');

// Next question button - Feedback page
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
// Show result button - Feedback page
const showResultBtn = document.getElementById('showResultBtn');

// New player btn - result page
const newPlayerBtn = document.getElementById('newPlayerBtn');

// Variables for each radio-Btn
const answerRadioBtn1 = document.getElementById('answerRadioBtn1') as HTMLInputElement;
const answerRadioBtn2 = document.getElementById('answerRadioBtn2') as HTMLInputElement;
const answerRadioBtn3 = document.getElementById('answerRadioBtn3') as HTMLInputElement;

// Events

// Click event to display the name page after user clicks on
// Condition to add evtlsnr if readyBtn exists in html
if (readyBtn !== null) {
  readyBtn.addEventListener('click', displayNamePage);
}

// Input event to enable run button
playerNameInput.addEventListener('input', enableRunBtn);

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

// Click event to trigger new player
// Condition to add evtlsnr if newPlayerBtn exists in html
if (newPlayerBtn !== null) {
  newPlayerBtn.addEventListener('click', newPlayerRound);
}

// variable for empty gameArray
let gameArray: any[] = [];

// Functions

// Function to display namepage when user klicks on readyBtn
function displayNamePage(): void {
  if (landingPage === null) {
    return;
  }
  if (namePage === null) {
    return;
  }
  landingPage.classList.add('hidden');
  namePage.classList.remove('hidden');
  // call on gameArray to copy original questionArray
  gameArray = [...questionArray];
  // Calls timerContainer to go away
  toggleTimerContainer();
}

// --------------------ENABLE RUNBTN---------------

function enableRunBtn(): void {
  if (runBtn === null) {
    return;
  }
  if (playerNameInput.value.length > 3) {
    runBtn.removeAttribute('disabled');
  } 
}
// Disable run button
function disableRunBtn(): void {
  if (runBtn === null) {
    return;
  }
  runBtn.setAttribute('disabled', '');
} 



// Funktion som triggas när användare klickar på "kör" i namnsida
// Kallar även på fråge-funktion

function startQuiz(): void {
  if (namePage === null) {
    return;
  }
  if (questionPage === null) {
    return;
  }
  namePage.classList.add('hidden');
  questionPage.classList.remove('hidden')
  disableRunBtn();
  startTimer(timer);
  showQuestion();
  // Calls timerContainer to display propperly
  toggleTimerContainer();
  // this will then be used to print out the name on the resultPage
  savedPlayerName = playerNameInput.value;
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

// Variable for counting
let questionCounter: number = 0;

// function for counting and displaying question number
function displayQuestionNumber(): void {
  const questionNumber = document.querySelector('#questionNumber');
  if (questionNumber === null) {
    return;
  }
  if (questionCounter === null) {
    return;
  }
  questionCounter += 1;
  questionNumber.innerHTML = `${questionCounter}`;
  // If questions reach 10 reset
  if (questionCounter === 10) {
    questionCounter = 0;
  }
}

// Display that question in the HTML
function showQuestion(): void {
  randomQuestion();
  if (questionText === null) {
    return;
  }
  questionText.innerHTML = currentQuestion.question;
  for (let i = 0; i < answerRadioBtn.length; i++) {
    answerRadioBtn[i].innerHTML = currentQuestion.answers[i].answer;
  }

  displayQuestionNumber();
}
// Check what the user har picked as answer in the form and return the index of that button
function checkAnswerInput(): number | null {
  const radioButtons = document.getElementsByName('answer');
  for (let i = 0; i < radioButtons.length; i++) {
    const radioButton = radioButtons[i] as HTMLInputElement;
    if (radioButton.checked) {
      return i;
    }
  }
  return null;
}

// Check the correct answer of the array of answers and return the index of that correct answer
function checkCorrectAnswer(): number | null {
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    if (currentQuestion.answers[i].correct) {
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

// Function to clear the answer input and disable answr btn
function clearAnswer(): void {
  if (answerBtn === null) {
    return;
  }
  answerRadioBtn1.checked = false;
  answerRadioBtn2.checked = false;
  answerRadioBtn3.checked = false;
  answerBtn.setAttribute('disabled', '');
}

// Funktion för att dölja feedback page och gå vidare till nästa fråga
function nextQuestion(): void {
  if (feedbackPage === null) {
    return;
  }
  if (questionPage === null) {
    return;
  }
  feedbackPage.classList.add('hidden');
  questionPage.classList.remove('hidden');
  showQuestion();
}

// DELETE WHEN MERGE IF NEEDED
let totalScore: number = 0; // TS type defined and set to 0.
// DELETE ABOVE IF NEEDED

/**
 * Takes the user to resultPage if it was the 10th question
 */
function getResult(): void {
  if (nextQuestionBtn === null) {
    return;
  }
  if (showResultBtn === null) {
    return;
  }
  if (questionCounter === 0) {
    nextQuestionBtn.classList.add('hidden');
    showResultBtn.classList.remove('hidden');
    stopTimer(timer);
  }
}

// Function for displaying Result page and toggle display on the playAgain-button
function displayResultPage(): void {
  const resultTitlePlayerName = document.querySelector('#resultTitlePlayerName');
  const totalScoreSpan = document.querySelector('#totalScore span');
  if (feedbackPage === null) {
    return;
  }
  if (resultPage === null) {
    return;
  }
  if (nextQuestionBtn === null) {
    return;
  }
  if (showResultBtn === null) {
    return;
  }
  if (resultTitlePlayerName === null) {
    return;
  }
  if (totalScoreSpan === null) {
    return;
  }
  if (playAgainBtn === null) {
    return;
  }
  feedbackPage.classList.add('hidden');
  resultPage.classList.remove('hidden');
  nextQuestionBtn.classList.remove('hidden');
  showResultBtn.classList.add('hidden');
  resultTitlePlayerName.innerHTML = savedPlayerName;
  totalScoreSpan.innerHTML = `${totalScore}`;
  if (gameArray.length >= 10) {
    playAgainBtn.classList.remove('hidden');
  } else {
    playAgainBtn.classList.add('hidden');
  }
  // Calls timerContainer to display propperly
  toggleTimerContainer();
}

// Function to make the same player play another round
const playAgainBtn = document.querySelector('#playAgainBtn');

if (playAgainBtn !== null) {
  playAgainBtn.addEventListener('click', playAgain);
}

function playAgain(): void {
  if (resultPage === null) {
    return;
  }
  if (questionPage === null) {
    return;
  }
  resultPage.classList.add('hidden');
  questionPage.classList.remove('hidden');
  resetTimer(timer);
  startTimer(timer);
  resetTotalScore();
  showQuestion();
  toggleTimerContainer();
}

function resetTotalScore(): void {
  totalScore = 0;
}

function newPlayerRound(): void {
  if (resultPage === null) {
    return;
  }
  if (namePage === null) {
    return;
  }
  resultPage.classList.add('hidden');
  namePage.classList.remove('hidden');
  gameArray = [...questionArray];
  resetTimer(timer);
  savedPlayerName = '';
  playerNameInput.value = '';
  resetTotalScore();
  toggleTimerContainer();
}

// eventlistener for answerBtn which displays the feedback page
if (answerBtn !== null) {
  answerBtn.addEventListener('click', displayFeedbackPage);
}

// function displaying feedback page when answerBtn is clicked
function displayFeedbackPage(): void {
  // Calls timerContainer to display propperly
  toggleTimerContainer();
  // local variable for the correctAnswerContainer
  const correctAnswerContainer = document.getElementById('correctAnswerContainer');
  // local variable for the wrongAnswerContainer
  const wrongAnswerContainer = document.getElementById('wrongAnswerContainer');
  // local variable for checking if answer is correct
  const rightAnswer = isAnswerCorrect();
  if (feedbackPage === null) {
    return;
  }
  if (questionPage === null) {
    return;
  }
  if (correctAnswerContainer === null) {
    return;
  }
  if (wrongAnswerContainer === null) {
    return;
  }
  feedbackPage.classList.remove('hidden');
  questionPage.classList.add('hidden');

  // check if the radioBtn answer is true
  if (rightAnswer) {
    // Adjust total score
    totalScore += 1;
    // if answer is true, display the correctAnswerContainer styling
    correctAnswerContainer.classList.remove('hidden');
    wrongAnswerContainer.classList.add('hidden');
  } else {
    // if answer isn't true, display the wrongAnswerContainer styling
    correctAnswerContainer.classList.add('hidden');
    wrongAnswerContainer.classList.remove('hidden');
  }
  clearAnswer();
  // Makes the buttons toggle display and stops timer if last question
  getResult();
}
