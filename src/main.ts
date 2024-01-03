// import typescriptLogo from './assets/images/typescript.svg'; // Exempel på hur ni importerar bilder
// import { sortArrayByText } from './helpers'; // Exempel på hur ni importerar en funktion från en annan fil

// /**
//  * Här definierar vi en mall för hur vi vill att vår array ska se ut.
//  * Ett så kallat "interface".
//  * Den är för att garantera att ALLA objekt i vår array har samtliga egenskaper.
//  * Prova t.ex. att lägga till en egenskap i interfacet, och notera hur arrayen nedanför
//  * får rödmarkeringar där denna egenskap saknas.
//  */
// interface IExampleArray {
//   name: string;
//   age: number;
// }

// // Här skriver vi att vår array med namnet myExampleArray ska följa reglerna (interfacet)
// // i IExampleArray och att det är en array genom att vi sätter [] efter
// const myExampleArray: IExampleArray[] = [
//   {
//     name: 'Hans',
//     age: 25,
//   },
//   {
//     name: 'Greta',
//     age: 30,
//   },
//   {
//     name: 'Häxan',
//     age: 87,
//   },
// ];

// // Skriv ut den sorterade arrayen i konsolen, använd en importerad funktion
// console.table(sortArrayByText(myExampleArray, 'name'));

// // Använd samma funktion för att sortera på en annan egenskap
// console.table(sortArrayByText(myExampleArray, 'age'));

// // Hämta ett HTML-element från index.html

// const container: HTMLDivElement | null = document.querySelector('#app');

// if (container !== null) { // Om HTML-elementet finns
//   container.innerHTML = `
//     <div>
//       <h1>Hello FED23D!</h1>
//       <img src="${typescriptLogo}" loading="lazy" width="32" height="32"
//         alt="Blå bakgrund, vita bokstäver ovanpå med texten TS">
//     </div>
//   `;
// }
// ------------------------------------- OUR FILE START FROM THIS LINE ---------------------------------------

import './questionArray.ts';
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


// Variabler för de olika containers
const landingPage = document.getElementById('landingPage');
const namePage = document.getElementById('namePage');
const questionPage = document.getElementById('questionPage');


// Variabler för knapparna 
// Redoknapp - Landing page
const readyBtn = document.getElementById('readyBtn');
// Körknapp - Name page
const runBtn = document.getElementById('runBtn');
// Nästa fråga knapp - Feedback page
const questionText = document.querySelector('#questionText');
// Gruppering av alla answer radio knapparna
const answerRadioBtn = document.querySelectorAll('.answerText');
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

// Function to display namepage when user klicks on readyBtn
function displayNamePage(): void {
  if (landingPage !== null && namePage !== null) {
    landingPage.classList.add('hidden');
    namePage.classList.remove('hidden');
  }
}
// Funktion som triggas när användare klickar på "kör" i namnsida
// Kallar även på fråge-funktion

function startQuiz(): void {
  if (namePage !== null && questionPage !== null) {
    namePage.classList.add('hidden');
    questionPage.classList.remove('hidden');
  }
  showQuestion();
}
// Funktion som visar en random fråga från arrayen, och
function showQuestion(): void {
  const randomQuestionId: number = Math.floor(Math.random() * questionArray.length);
  if (questionText !== null && answerRadioBtn !== null) {
    questionText.innerHTML = questionArray[randomQuestionId].question;
    for (let i = 0; i < answerRadioBtn.length; i++) {
      answerRadioBtn[i].innerHTML = questionArray[randomQuestionId].answers[i].answer;
    }
  }
  questionArray.splice(randomQuestionId, 1);
  console.table(questionArray);
}

