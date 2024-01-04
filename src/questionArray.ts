/**
 * Här definierar vi en mall för hur vi vill att vår array ska se ut.
 * Ett så kallat "interface".
 * Den är för att garantera att ALLA objekt i vår array har samtliga egenskaper.
 * Prova t.ex. att lägga till en egenskap i interfacet, och notera hur arrayen nedanför
 * får rödmarkeringar där denna egenskap saknas.
 */
export interface IQuestionArray {
  id: number;
  question: string;
  answers: [
    { answer: string; correct: boolean },
    { answer: string; correct: boolean },
    { answer: string; correct: boolean },
  ];
}

// Här skriver vi att vår array med namnet myExampleArray ska följa reglerna (interfacet)
// i IExampleArray och att det är en array genom att vi sätter [] efter
export const questionArray: IQuestionArray[] = [
  {
    id: 1,
    question:
      '1977 gav Sex Pistols ut singeln Pretty Vacant med b-sidan No Fun. Vem/vilka gjorde originalet till No Fun?',
    answers: [
      { answer: 'The Who', correct: false },
      { answer: 'Hep Stars', correct: false },
      { answer: 'The Stooges', correct: true },
    ],
  },
  {
    id: 2,
    question: 'José Gonzales gjorde 2007 en cover på sången Teardrop. Vem/vilka gjorde originalet?',
    answers: [
      { answer: 'Massive Attack', correct: true },
      { answer: 'Portishead', correct: false },
      { answer: 'Eagle Eye Cherry', correct: false },
    ],
  },
  {
    id: 3,
    question:
      // eslint-disable-next-line
      'Beatles-låten I Wanna Be Your Man spelades in och gavs ut av ett annat band innan Beatles egna utgåva. Vilket var bandet?',
    answers: [
      { answer: 'The Searchers', correct: false },
      { answer: 'The Merseys', correct: false },
      { answer: 'The Rolling Stones', correct: true },
    ],
  },
  {
    id: 4,
    question: 'Clara Klingenström gjorde 2022 en cover på låten Nu kan du få mig så lätt. Vem är originalartisten?',
    answers: [
      { answer: 'Eva Dahlgren', correct: false },
      { answer: 'Marie Fredriksson', correct: false },
      { answer: 'Håkan Hellström', correct: true },
    ],
  },
  {
    id: 5,
    question: 'Run DMC hade på 80-talet en hit med låten Walk this way från 1975. Vad hette originalbandet?',
    answers: [
      { answer: 'Aerosmith', correct: true },
      { answer: 'The Smiths', correct: false },
      { answer: 'Smithereens', correct: false },
    ],
  },
  {
    id: 6,
    question: 'Keith Richards gav ut julsingeln Run Rudolph Run 1978. Vem gjorde originalet på 50-talet?',
    answers: [
      { answer: 'Den Rockande Samen', correct: false },
      { answer: 'Tommy Steele', correct: false },
      { answer: 'Chuck Berry', correct: true },
    ],
  },
  {
    id: 7,
    question:
      // eslint-disable-next-line
      'Låten Ice Ice Baby med Vanilla Ice baseras på en sampling av basgången i en låt sprungen ur ett artistsamarbete. Vilka var artisterna?',
    answers: [
      { answer: 'Fleetwood Mac & Sting', correct: false },
      { answer: 'Queen & David Bowie', correct: false },
      { answer: 'Michael Jackson & Paul McCartney', correct: true },
    ],
  },
  {
    id: 8,
    question:
      // eslint-disable-next-line
      'Because the Night är från början en halvskriven outgiven låt av Bruce Springsteen. Vilket band fick en världshit med den efter att bandledaren skrivit klart texten?',
    answers: [
      { answer: 'Florence and the Machine', correct: false },
      { answer: 'Huey Lewis & the News', correct: false },
      { answer: 'Patti Smith Group', correct: true },
    ],
  },
  {
    id: 9,
    question:
      // eslint-disable-next-line
      "Bandet Smaklösa (världsberömda på Gotland) har haft en jätte(?)hit med låten Det regnar kor som är en svensk version av låten It's Raining Men. Vad heter gruppen som framförde originalet?",
    answers: [
      { answer: 'The Weather Girls', correct: true },
      { answer: 'Spice Girls', correct: false },
      { answer: 'The Supremes', correct: false },
    ],
  },
  {
    id: 10,
    question:
      // eslint-disable-next-line
      'I filmen Notting Hill tolkade Elvis Costello låten She på soundtracket. Vilken fransktalande artist gjorde originalet?',
    answers: [
      { answer: 'Johnny Halliday', correct: false },
      { answer: 'Jacques Brel', correct: false },
      { answer: 'Charles Aznavour', correct: true },
    ],
  },
  {
    id: 11,
    question: 'Vilken ABBA-låt samplade Madonna i låten Every little thing that you say or do?',
    answers: [
      { answer: 'Gimme, gimme, gimme', correct: true },
      { answer: 'Waterloo', correct: false },
      { answer: 'Knowing Me, Knowing You', correct: false },
    ],
  },
  {
    id: 12,
    question:
      // eslint-disable-next-line
      'Låten Hallelujah är nog mest känd i en version från 1994 med Jeff Buckley, men vem skrev och spelade in originalet på 80-talet?',
    answers: [
      { answer: 'Leonard Cohen', correct: true },
      { answer: 'Tim Buckley', correct: false },
      { answer: 'Donovan', correct: false },
    ],
  },
  {
    id: 13,
    question: '2008 gav Adele på sitt debutalbum ut låten Make You Feel My Love. Vem skrev låten och gav ut den 1997?',
    answers: [
      { answer: 'George Harrison', correct: false },
      { answer: 'Bob Dylan', correct: true },
      { answer: 'Jeff Lynne', correct: false },
    ],
  },
  {
    id: 14,
    question:
      // eslint-disable-next-line
      '2023 sjöng Cher in jullåten Christmas (Baby, please come home) i duett med artisten som 60 år tidigare först gjorde den, den gången med Cher som bakgrundssångerska. Vad heter originalartisten?',
    answers: [
      { answer: 'Ronnie Spector', correct: false },
      { answer: 'Diana Ross', correct: false },
      { answer: 'Darlene Love', correct: true },
    ],
  },
  {
    id: 15,
    question:
      // eslint-disable-next-line
      'Engelska bandet Status Quo gjorde 1970 den nysläppta låten Roadhouse Blues till en av sina standards live. Låten gav dem inspiration till den boogieinriktade rock som skulle göra dem kända. Vad hette bandet som gav ut originalet?',
    answers: [
      { answer: 'MC5', correct: false },
      { answer: 'Greatful Dead', correct: false },
      { answer: 'The Doors', correct: true },
    ],
  },
  {
    id: 16,
    question:
      // eslint-disable-next-line
      'Skotska bandet Nazareth fick 1975 en brottarhit med balladen Love Hurts. Låten hade tidigare spelats in av bl a Emmylou Harris & Gram Parsons, men vilken grupp gav ut originalet 1960?',
    answers: [
      { answer: 'The Everly Brothers', correct: true },
      { answer: 'The Walker Brothers', correct: false },
      { answer: 'The Righteous Brothers', correct: false },
    ],
  },
  {
    id: 17,
    question:
      // eslint-disable-next-line
      'Glimmande nymf är en sång gavs ut av Fred Åkerström 1975. Vems sånger tokade han på albumet med samma namn som sången?',
    answers: [
      { answer: 'Evert Taubes', correct: false },
      { answer: 'Dan Anderssons', correct: false },
      { answer: 'Carl Michael Bellmans', correct: true },
    ],
  },
  {
    id: 18,
    question:
      // eslint-disable-next-line
      '2008 samplar artisten Kid Rock tre artister/grupper i "plågan" All Summer Long. Warren Zevon och Bob Seger var två av dem. Vilket band var tredje källan?',
    answers: [
      { answer: 'The Allman Brothers', correct: false },
      { answer: 'Lynyrd Skynyrd', correct: true },
      { answer: 'Ramones', correct: false },
    ],
  },
  {
    id: 19,
    question:
      // eslint-disable-next-line
      'Rockstandardlåten Cocaine är kanske mest känd i Eric Claptons version från 1977. Originalverionen kom året innan. Vem var artisten och låtskrivaren?',
    answers: [
      { answer: 'J.J. Cale', correct: true },
      { answer: 'John Cale', correct: false },
      { answer: 'L L Cool J', correct: false },
    ],
  },
  {
    id: 20,
    question:
      // eslint-disable-next-line
      '1949 sjöng Bertil Boo "Jag drömmer om en jul hemma". Sju år tidigare spelades det engelskspråkiga originalet in, som kom att bli den mest sålda (fysika) singeln genom tiderna. Vem sjöng den?',
    answers: [
      { answer: 'Frank Sinatra', correct: false },
      { answer: 'Jim Reeves', correct: false },
      { answer: 'Bing Crosby', correct: true },
    ],
  },
];
