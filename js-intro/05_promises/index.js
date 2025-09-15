// Übung: Promises

// Die folgende, fertig implementierte "loadGreetingFromServer"-Funktion
// steht exemplarische für eine asynchrone Funktion, die z.B. von einer
// Bibliothek zur Verfügung gestellt wird und mit der wir Daten von einer
// asynchronen API abfragen können.
// Sie liefert für einen übergebenen Namen ein Objekt mit einem
// Gruß zurück, oder einen Fehler, wenn kein Name übergeben wurde.
//
// Im Erfolgsfall wird ein "Greeting-Objekt" mit dem Gruß als Promise zurückgegeben:
//  { phrase: "...", name: "..." }
function loadGreetingFromServer(name) {
  return new Promise((resolve, reject) => {
    const timeout = name ? 500 : 250;

    setTimeout(() => {
      if (!name) {
        return reject("Must specify name");
      }
      return resolve({
        phrase: "Hello",
        name
      });
    }, timeout);
  });
}


// AUFGABE:
//
// 1. Vervollständige die Implementierung von getGreetingAsString (s.u.)
// 2. Vervollständige die Aufrufe von getGreetingAsString (s.u.)

function getGreetingAsString(name) {
  // Implementiere diese Funktion
  // Diese Funktion soll loadGreetingFromServer  mit 'name' aufrufen und
  //   - im Erfolgsfall einen String zurückliefern, in dem die Daten des von
  //     loadGreetingFromServer zurückgelieferte Greeting-Objekts enthalten sind
  //     Das Greeting-Objekt besteht auf 'name' und 'phrase'
  //   - im Fehlerfall einen String zurückliefern mit einer Fehlermeldung
  //
  // Du kannst Promise-Ketten oder async/await API verwenden
}

// Führe getGreetingAsString aus und gib das Ergebnis auf der Konsole aus
//   - Im ersten Fall ("Susi") sollte eine Meldung mit dem Gruß erscheinen
//   - Im zweiten Fall ("null") sollte eine Fehlermeldung erscheinen
//
// Zusatz-Aufgabe:
//  - kannst Du sicherstellen, dass die Ausgabe für Susi *immer* vor der Ausgabe
//    von "null" auf der Konsole erscheint?

getGreetingAsString("Susi");
getGreetingAsString(null);

