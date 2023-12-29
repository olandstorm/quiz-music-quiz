// import './scss/style.scss'; // Importera huvud-SCSS-filen
// import typescriptLogo from './assets/images/typescript.svg'; // Exempel på hur ni importerar bilder
import { sortArrayByText } from './helpers'; // Exempel på hur ni importerar en funktion från en annan fil

/**
 * Här definierar vi en mall för hur vi vill att vår array ska se ut.
 * Ett så kallat "interface".
 * Den är för att garantera att ALLA objekt i vår array har samtliga egenskaper.
 * Prova t.ex. att lägga till en egenskap i interfacet, och notera hur arrayen nedanför
 * får rödmarkeringar där denna egenskap saknas.
 */
interface IExampleArray {
  id: number;
  question: string;
  answers: [
    { answer: string; correct: boolean },
    { answer: string; correct: boolean },
    { answer: string; correct: boolean },
  ];
}

interface IExampleArray2 {
  id: number;
  question: string;
  answer1: { answer: string; correct: boolean };
  answer2: { answer: string; correct: boolean };
  answer3: { answer: string; correct: boolean };
}

// Här skriver vi att vår array med namnet myExampleArray ska följa reglerna (interfacet)
// i IExampleArray och att det är en array genom att vi sätter [] efter
const myExampleArray: IExampleArray[] = [
  {
    id: 1,
    question: 'Duis arcu tortor suscipit?',
    answers: [
      { answer: 'Vestibulum fringilla pede sit', correct: false },
      { answer: 'Ut tincidunt tincidunt erat', correct: true },
      { answer: 'Vivamus aliquet elit ac', correct: false },
    ],
  },
];

const myExampleArray2: IExampleArray2[] = [
  {
    id: 2,
    question: 'Maecenas egestas arcu quis?',
    answer1: { answer: 'Nam commodo suscipit quam', correct: true },
    answer2: { answer: 'In ac felis quis', correct: false },
    answer3: { answer: 'Nam ipsum risus rutrum', correct: false },
  },
];

// // Skriv ut den sorterade arrayen i konsolen, använd en importerad funktion
console.table(sortArrayByText(myExampleArray, 'id'));

// // Använd samma funktion för att sortera på en annan egenskap
console.table(sortArrayByText(myExampleArray2, 'question'));

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
