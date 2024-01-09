import { questionArray, type IQuestionArray } from './questionArray.ts';
import './scss/style.scss';

/**
 * --------------------------------
 * -----------CONTAINERS------------
 * --------------------------------
 */
const timerContainer = document.getElementById('timerContainer');
const landingPage = document.getElementById('landingPage');
const namePage = document.getElementById('namePage');
const questionPage = document.getElementById('questionPage');
const feedbackPage = document.getElementById('feedbackPage');
const correctAnswerContainer = document.getElementById('correctAnswerContainer');
const wrongAnswerContainer = document.getElementById('wrongAnswerContainer');
const resultPage = document.getElementById('resultPage');

/**
* --------------------------------
* -----------BUTTONS--------------
* --------------------------------
*/
const landingPageReadyBtn = document.getElementById('landingPageReadyBtn');
const namePageRunBtn = document.getElementById('namePageRunBtn');
const answerRadioBtn1 = document.getElementById('answerRadioBtn1') as HTMLInputElement;
const answerRadioBtn2 = document.getElementById('answerRadioBtn2') as HTMLInputElement;
const answerRadioBtn3 = document.getElementById('answerRadioBtn3') as HTMLInputElement;
const allRadioBtns = document.querySelectorAll('.answerRadioBtn');
const answerBtn = document.getElementById('answerBtn');
const answerRadioBtn = document.querySelectorAll('.answerText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const showResultBtn = document.getElementById('showResultBtn');
const newPlayerBtn = document.getElementById('newPlayerBtn');
const playAgainBtn = document.querySelector('#playAgainBtn');

/**
* --------------------------------
* --------INPUTS AND TEXT---------
* --------------------------------
*/
const playerNameInput = document.querySelector('.playerName') as HTMLInputElement;
const questionText = document.querySelector('#questionText');
const resultTitlePlayerName = document.querySelector('#resultTitlePlayerName'); 
const totalScoreSpan = document.querySelector('#totalScore span'); 

/**
* --------------------------------
* -------------EVENTS-------------
* --------------------------------
*/
if (landingPageReadyBtn !== null) {
  landingPageReadyBtn.addEventListener('click', displayNamePage);
}
if (namePageRunBtn !== null) {
  namePageRunBtn.addEventListener('click', startQuiz);
}
allRadioBtns.forEach(radioBtn => {
  radioBtn.addEventListener('click', enableAnswerBtn);
});
answerBtn?.addEventListener('click', displayFeedbackPage);
if (nextQuestionBtn !== null) {
  nextQuestionBtn.addEventListener('click', nextQuestion);
}
if (showResultBtn !== null) {
  showResultBtn.addEventListener('click', displayResultPage);
}
if (newPlayerBtn !== null) {
  newPlayerBtn.addEventListener('click', newPlayerRound);
}
playAgainBtn?.addEventListener('click', playAgain);


/**
* --------------------------------
* -------------OTHER--------------
* --------------------------------
*/
let gameArray: any[] = [];
let savedPlayerName: string = ''; 
let questionCounter: number = 0;
let currentQuestion: IQuestionArray;
let totalScore: number = 0; // REMOVE? Skulle ev bort vid merge? 

/**
 * --------------------------------
 * -------------TIMER--------------
 * --------------------------------
 */
interface ITimer {
  intervalId: number | null;
  seconds: number;
  minutes: number;
}
const timer: ITimer = {
  intervalId: null,
  seconds: 0,
  minutes: 0,
};
/**
 * Adds 0 if in less than 10
 */
function formatTime(time: number): string {
  return time < 10 ? `0${time}` : `${time}`;
}
/**
 * Toggle timer visibility
 * Toggle timer styling
 */
function toggleTimerContainer(): void {
  if (
    !(questionPage as HTMLElement)?.classList.contains('hidden') ||
    !(feedbackPage as HTMLElement)?.classList.contains('hidden')
  ) {
    timerContainer?.classList.remove('hidden');
    timerContainer?.classList.remove('resultTimer');
  } else if (!(resultPage as HTMLElement)?.classList.contains('hidden')) {
    timerContainer?.classList.remove('hidden');
    timerContainer?.classList.add('resultTimer');
  } else {
    timerContainer?.classList.add('hidden');
    timerContainer?.classList.remove('resultTimer');
  }
}
/**
 * Loops to HTML
 */
function updateTimer(timer: ITimer): void {
  const timerDisplay = document.querySelector('.timer');
  console.log(`${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`);

  if (timerDisplay !== null) {
    timerDisplay.innerHTML = `${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`;
  }
}
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
function stopTimer(timer: ITimer): void {
  if (timer.intervalId !== null) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
}
function resetTimer(timer: ITimer): void {
  stopTimer(timer);
  timer.seconds = 0;
  timer.minutes = 0;
  updateTimer(timer);
}

/**
 * --------------------------------
 * ---------LANDINGPAGE------------
 * --------------------------------
 */
function displayNamePage(): void {
  if (landingPage !== null && namePage !== null) {
    landingPage.classList.add('hidden');
    namePage.classList.remove('hidden');
  }
  // call on gameArray to copy original questionArray
  gameArray = [...questionArray];
  console.table(gameArray);
  // Calls timerContainer to go away
  toggleTimerContainer();
}

/**
 * --------------------------------
 * -----------NAMEPAGE-------------
 * --------------------------------
 */
function startQuiz(): void {
  if (namePage !== null && questionPage !== null) {
    namePage.classList.add('hidden');
    questionPage.classList.remove('hidden');
  }

  startTimer(timer);
  showQuestion();
  toggleTimerContainer();

  if (playerNameInput !== null) {
    savedPlayerName = playerNameInput.value;
  }
}

/**
 * --------------------------------
 * ---------QUESTIONPAGE-----------
 * --------------------------------
 */
/**
 * Randomize a question.
 * Return question
 * Remove question from the temporary array
 */
function randomQuestion(): IQuestionArray {
  const randomQuestionId: number = Math.floor(Math.random() * gameArray.length);
  currentQuestion = gameArray[randomQuestionId];
  gameArray.splice(randomQuestionId, 1);
  return currentQuestion;
}
/**
 * Display the selected question.
 */
function showQuestion(): void {
  randomQuestion();
  if (questionText !== null && answerRadioBtn !== null) {
    questionText.innerHTML = currentQuestion.question;
    for (let i = 0; i < answerRadioBtn.length; i++) {
      answerRadioBtn[i].innerHTML = currentQuestion.answers[i].answer;
    }
  }
  displayQuestionNumber();
}
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
/**
 * When a radioBtn is choosen, remove 'disabled' on answer btn. 
 */
function enableAnswerBtn(): boolean {
  answerBtn?.removeAttribute('disabled');
  return true;
}
/**
 * Checks which answer the user choose. 
 * Returns answer index.
 */
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
/**
 * Checks which answer is correct for current question. 
 * Returns answer index.
 */
function checkCorrectAnswer(): number | null {
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    if (currentQuestion.answers[i].correct) {
      console.log(i);
      return i;
    }
  }
  return null;
}
/**
 * Checks user answer vs questions correct answer. 
 * Returns true if correct.
 */
function isAnswerCorrect(): boolean {
  const userAnswerIndex = checkAnswerInput();
  const correctAnswerIndex = checkCorrectAnswer();
  return userAnswerIndex === correctAnswerIndex;
}
/**
 * Toggles feedbackcontainer visible.
 * Toggles different subcontainers depending on if answer was corrct or not.
 */
function displayFeedbackPage(): void {
  if (feedbackPage !== null && questionPage !== null) {
    feedbackPage.classList.remove('hidden');
    questionPage.classList.add('hidden');
  }

  toggleTimerContainer();

  const rightAnswer = isAnswerCorrect();
  if (rightAnswer) {
    totalScore += 1;
    correctAnswerContainer?.classList.remove('hidden');
    wrongAnswerContainer?.classList.add('hidden');
  } else { 
    correctAnswerContainer?.classList.add('hidden');
    wrongAnswerContainer?.classList.remove('hidden');
  }
  clearAnswer();
  getResult();
}
/**
 * Clears the answer input and re-disablea answer btn
 */
function clearAnswer(): void {
  answerRadioBtn1.checked = false;
  answerRadioBtn2.checked = false;
  answerRadioBtn3.checked = false;
  if (answerBtn !== null) {
    answerBtn.setAttribute('disabled', '');
  }
}

/**
 * --------------------------------
 * ---------FEEDBACKPAGE-----------
 * --------------------------------
 */

function nextQuestion(): void {
  if (feedbackPage !== null && questionPage !== null) {
    feedbackPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
  }
  showQuestion();
}
/**
 * Takes the user to resultPage if it was the 10th question
 */
function getResult(): void {
  if (questionCounter === 0) {
    nextQuestionBtn?.classList.add('hidden');
    showResultBtn?.classList.remove('hidden');
    stopTimer(timer);
  }
}
/**
 * Toggle result page
 * Display "play again" btn
 */
function displayResultPage(): void {
  if (feedbackPage === null) {
    return;
  }
  if (resultPage === null) {
    return;
  }
  if (resultTitlePlayerName === null) {
    return;
  }
  if (totalScoreSpan === null) {
    return;
  }
  feedbackPage.classList.add('hidden');
  resultPage.classList.remove('hidden');
  nextQuestionBtn?.classList.remove('hidden');
  showResultBtn?.classList.add('hidden');
  resultTitlePlayerName.innerHTML = savedPlayerName;
  totalScoreSpan.innerHTML = `${totalScore}`;
  if (gameArray.length >= 10) {
    playAgainBtn?.classList.remove('hidden');
  } else {
    playAgainBtn?.classList.add('hidden');
  }
  toggleTimerContainer();
}

/**
 * --------------------------------
 * ---------RESULTPAGE-----------
 * --------------------------------
 */
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


