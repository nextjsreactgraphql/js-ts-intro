console.log("Please edit index.js");

// 1. Schreibe eine 'helloWorld'-Funktion
//   Die Funktion soll einen Parameter entgegen nehmen, der "name" heißt
//     - Wenn der übergebene Parameter KEIN String ist,
//       soll die Funktion einen Leerstring zurückliefern
//
//       Den Typen einer Variablen oder eines Parameters kannst Du mit "typeof" ermitteln.
//       "typeof" liefert dir einen String zurück, der den Typ angibt
//       z.B: console.log(typeof "Moin"); // "string"
//
//     - Ansonsten (Parameter ist ein String): liefer einen Gruß (z.B. "Hallo, ...Name..." zurück)
//       - Verwende Template-Strings, um den Gruß zu erzeugen
//
// 2. Rufe die Funktion mit unterschiedlichen Werten auf und gib das Ergebnis auf der Konsole aus
//     - Konsolen-Ausgaben kannst Du mit console.log machen: console.log("...");
//     - Für helloWorld("Susi") sollte "Hallo, Susi" erscheinen
//     - Für helloWorld(2021) sollte "" erscheinen
//     - Für helloWorld() sollte "" erscheinen
// 3. (OPTIONAL, nur wenn Zeit ist): Der 'name'-Parameter kann auch eine Funktion sein
//     - Zusätzlich zum bisherigen Verhalten: wenn der name-Parameter eine Funktion ist
//       ruf' die Funktion innerhalb von 'helloWorld' auf. Die Funktion liefert dann den
//       Namen der Person zurück, die gegrüßt werden soll, z.B:
//       function getName() { return "Susi"; }
//       Wenn 'getName' an 'helloWorld' übergeben wird, müsste also wieder `Hallo, Susi` erscheinen

function hallo() {
  console.log("HALLO");
}

hallo();

// REFERENZ
// function-Expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
// typeof-Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// Template Strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//
// Zum Ausgeben von Log-Informationen auf der Konsole (Node.JS und Browser):
//  https://developer.mozilla.org/en-US/docs/Web/API/console/log_static

