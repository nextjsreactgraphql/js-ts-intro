import {loadGreetingFromServer} from "./api.js";
// Übung: Promises

// loadGreetingFromServer liefert ein Objekt mit einen Gruß für den Namen zurück,
// oder einen Fehler wenn kein name angegeben wurde.
//
// Im Erfolgsfall wird ein Promise zurückgegeben, das zum folgenden
// Objekt aufgelöst wird { phrase: ..., name: ... }

// 1. Vervollständige getGreetingAsString (s.u.)
// 2.

function getGreetingAsString(name) {
  // Implementiere diese Funktion
  // Die Funktion soll loadGreetingFromServer mit 'name' aufrufen und
  //   - im Erfolgsfall einen String zurückliefern, in dem die Daten des von
  //     loadGreetingFromServer zurückgelieferte Greeting-Objekts enthalten sind
  //   - im Fehlerfall einen String zurückliefern mit einer Fehlermeldung
  return loadGreetingFromServer(name)
    .then(object => `${object.phrase} ${object.name}`)
    .catch(error => `Could not greet ${name}: ${error}`);
}

// Führe getGreetingAsString aus und gib das Ergebnis auf der Konsole aus
//   - Im ersten Fall ("Susi") sollte eine Meldung mit dem Gruß erscheinen
//   - Im zweiten Fall ("null") sollte eine Fehlermeldung erscheinen
//
// Zusatz:
//  - kannst Du sicherstellen, dass die Ausgabe für Susi *immer* vor der Ausgabe
//    von "null" kommt?
getGreetingAsString("Susi").then(result => console.log(result));
getGreetingAsString(null).then(result => console.log(result));

// Zusatz:
//  - kannst Du sicherstellen, dass die Ausgabe für Susi *immer* vor der Ausgabe
//    von "null" kommt?
 Promise.all([getGreetingAsString("Susi"), getGreetingAsString(null)]).then(([first, second]) => {
   console.log(first);
   console.log(second);
 });
