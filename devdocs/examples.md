/*
 * Sorts an object array by a given property.
 * Example: [ { name: 'H' }, { name: 'A' } ]
 * @param array - The object array to pass in
 * @param property - The object key to sort by
 
export function sortArrayByText(array: any[], property: string): string[] {
  return array.sort((a, b) => {
    const textA = a[property];
    const textB = b[property];
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}
 */
/* eslint-disable max-len */
// import './scss/style.scss'; // Importera huvud-SCSS-filen
// import typescriptLogo from './assets/images/typescript.svg'; // Exempel på hur ni importerar bilder
/* import { sortArrayByText } from './examples'; // Exempel på hur ni importerar en funktion från en annan fil

// // Skriv ut den sorterade arrayen i konsolen, använd en importerad funktion
console.table(sortArrayByText(questionArray, 'id'));

// // Använd samma funktion för att sortera på en annan egenskap
console.table(sortArrayByText(questionArray, 'question')); */

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
