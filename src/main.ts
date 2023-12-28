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
// ----------------------------------------------------- OUR FILE START FROM THIS LINE --------------------------------------------------

import './scss/style.scss'; // Importera huvud-SCSS-filen

/* 

// GLOBAL VARIABLES 
// If the variable you need is of the local variety in another function, talk to the person who made the variable, then move it to here instead. But make sure the old function still works before merging! 

let playerName: string | null = null; // TS definition of what the variable should contain + initial definition för the playerName
const totalScore: number = 0; // TS type defined and set to 0. 
let questionsForRound: { question: string, answer1: string, answer2: string, answer3: string } [] ; // Our array of 10 questions picked for the round.  (Might need alteration, base it of off Pers array, make sure it's the same as he has!!)
let usedQuestions: { question: string, answer1: string, answer2: string, answer3: string } [] ; // For saving the used questions, later in IF statment make sure to include this as a check for "have I used this question before" when player wants to play round 2. 

// Timer (might be it's own div/ section later) - parts: 
const timerContainer = document.getElementById('timerContainer');
let timer: any; // What we will loop out to the container. Will be altered by stopTime and startTime perhaps? 
const timerRun: boolean = false; // start and stop condition
let startTime: any = '00.00'; // mm:ss
let stopTime: any = '00.00' 

// Jag skrev en rad för alla element som vi har i vår variabellista i Excel som skall kopplas till JS/TS, dessa kan man ta när man behöver. 
// De skall inte nödvändigtvis vara globala sen men jag höll ändå på och tog med dem. 

const landingPage = document.getElementById('landingPage'); // For adding/ removing "hidden" from classlist.
const namePage = document.getElementById('namePage'); // For adding/ removing "hidden" from classlist.
const questionPage = document.getElementById('questionPage'); // For adding/ removing "hidden" from classlist.
const feedbackPage = document.getElementById('feedbackPage'); // For adding/ removing "hidden" from classlist.
const resultPage = document.getElementById('resultPage'); // For adding/ removing "hidden" from classlist.

// Landing page - parts: 
const readyBtn = document.getElementById('readyBtn');

// Name page - parts:
const runBtn = document.getElementById('runBtn'); // Add eventlistener to take the value of the name input + error if empty. 
const playerNameInput = document.getElementById('playerName'); // Take XXX.value from here or use the nameLabel?? Ask Mustafa :) 
playerName = playerNameInput.value; // Assigns new value to the playerName (Should trigger when "runBtn" is clicked on). Red line now as HTMl element doesn't exist yet. 

// Question page - parts:
const questionForm = document.getElementById('questionForm');
const radioBtnContainer = document.getElementById('radioBtnContainer'); 
const answerRadioBtn1 = document.getElementById('answerRadioBtn1'); // Add click event: enable answer btn (otherwise disabled) 
const answerRadioBtn2 = document.getElementById('answerRadioBtn2'); // Add click event: enable answer btn (otherwise disabled)
const answerRadioBtn3 = document.getElementById('answerRadioBtn3'); // Add click event: enable answer btn (otherwise disabled)
const answerBtn = document.getElementById('answerBtn'); // Add click event: checking of answer is correct ect. 
const questionNumber = document.getElementById('questionNumber'); // h2 element targeted, we will change innerHTML by count +1 for every question. 

// Feedback page - parts:
const correctAnswerContainer = document.getElementById('correctAnswerContainer'); // For adding/ removing "hidden" from classlist. Note, this one is inside the feedbackPage container so that needs to be visible as well!
const wrongAnswerContainer = document.getElementById('wrongAnswerContainer'); // For adding/ removing "hidden" from classlist. Note, this one is inside the feedbackPage container so that needs to be visible as well!
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const correctAnswer = document.getElementById('correctAnswer'); // targets the <p> in the wrongAnswerContainer so we can display the correct answer when player makes mistake. 

// Result page - parts: 
const totalScoreContainer = document.getElementById('totalScoreContainer');
const playAgainBtn = document.getElementById('playAgainBtn'); // Btn for opening namePage(?) - yet to be determined? Maybe we need 2 buttons? "playAgain and newPlayer"? 

*/