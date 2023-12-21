# TODO

### Landing page

- [] Knapp "Redo!" - När användaren klickar på Redo-knappen tas den till sida 2 med namn-input och Kör-knappen och nollställer totalScore-variabel

### Inlogg

- [] Input för namn - String - När value.length > 0 på inputen så aktiveras Kör-knappen // Disabled
- [] Knapp "Kör" - När användaren klickar på Kör-knappen tas den till Frågesidan, skapa spelomgångsarray som är annorlunda än innan, timern aktiveras och namnet returneras

### Frågesida

- [] Timern - Display timer som startarts när användaren har klickat på Kör. "Animation" för tidräkningen. Placerad i en container för timern
- [] Text "Number" - För varje fråga, öka nummer med 1
- [] Text "Frågan" - För varje fråga, byt ut innehåll/frågan till nästa objekt i arrayen
- [] Radioknappar - Koppla HTML med arrayen, shuffla array med svarsalternativ för frågan, update efter shuffle så att det visas för användaren
- [] Text "Svarsalternativ" - För varje fråga, byt ut innehåll/svarsalternativ till nästa objekt i arrayen
- [] Knapp "Svara" - Kontrollera vilken radiobutton som är checked via objektets boolean på om det är korrekt eller ej. If-sats för vilken vy som länkas till och antingen lägga till 1 på totalen eller 0
- [] Kontroll på radioknapparna - Om någon är "checked" - able "Svara"-knappen

### Ny fråga funktion

- [] Text "Number" - För varje fråga, öka nummer med 1
- [] Text "Frågan" - För varje fråga, byt ut innehåll/frågan till nästa objekt i arrayen
- [] Radioknappar - Koppla HTML med arrayen, shuffla array med svarsalternativ för frågan, update efter shuffle så att det visas för användaren
- [] Text "Svarsalternativ" - För varje fråga, byt ut innehåll/svarsalternativ till nästa objekt i arrayen
- [] Knapp "Svara" - Kontrollera vilken radiobutton som är checked via objektets boolean på om det är korrekt eller ej. If-sats för vilken vy som länkas till och antingen lägga till 1 på totalen eller 0. If-sats om objekt 9 - stanna timer på klick.
- [] Kontroll på radioknapparna - Om någon är "checked" - able "Svara"-knappen

### Feedback

- [] Text - Om radiobutton var "true" blir form hidden och feedback-container visas med rätt svar-vy och om det är "false" visas fel svar-vy.
- [] Knapp "Nästa fråga" - Togglar containers så att formen syns igen och triggar Ny fråga funktion (Denna knapp är hårdkodad i HTML)
- [] Knapp "Nästa fråga" - If fråga 10 (objekt 9) - Ändra text på knappen till "Resultat" och skicka till Resultat-sidan

### Resultat

- [] Text - Loopa ut totalScore, namn?
- [] Text - Loopa ut totalTime
- [] Knapp "Spela igen" - Rensa tid, poäng och namn och användaren tas tillbaka till Inloggsssidan

// Extra

- [] Rage quit button
- [] "Hem"-knapp
