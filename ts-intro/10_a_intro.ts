export default undefined;

// VORBEREITUNG:
//  - Entferne die erste Zeile in dieser DAtei ("// @ts-nocheck")
//    - Damit "aktivierst" du TypeScript in dieser Datei
//    - Deine IDE zeigt dir jetzt TS-Fehler an (wenn es welche gibt)
//
// AUFGABE:
//  1. Vervollständige die Signatur von 'greet'
//    - Sie soll einen Parameter 'p' haben
//      - p ist optional (darf also weggelassen werden)
//      - p darf null sein
//      - p darf ein String sein
//      - OPTIONAL/ZUSATZAUFGABE: p darf eine Funktion (!) sein, die einen String _zurückliefert_
//    - Die Funktion soll _immer_ einen String zurückliefern
//
//  2. Implementiere die Funktion:
//    - wenn p nicht angegebn wurde, soll sie "Hello" zurückgegebn
//    - wenn p ein String ist, soll sie "Hello, " gefolgt vom String in Großbuchstaben
//        zurückliefern (toUpperCase())
//    - OPTIONAL/ZUSATZAUFGABE: wenn p eine Funktion ist, soll sie die Funktion ausführen, und
//        mit dem Rückgabe-Wert einen Gruß bilden:
//        "Moin, " + Rückgabewert in Großbuchstaben (toUpperCase())
//
//  Du kannst kontrollieren, ob du alles korrekt gemacht hast:
//   1. Es dürfen keine TS-Fehler angezeigt werden
//   2. Wenn du die Datei ausführst, darf es keine Fehler geben
//      (s. assert-Statements unten)
//
// REFERENZ
// Funktionen mit Parametern und Rückgabewert beschreiben:
//   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions
// Datentypen in TypeScript: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
//   Beschreiben von Funktionssignaturen: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
// null und undefined: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
// "implicit any" als "Fallback", wenn TS kein Typ ableitet:
//   - https://www.typescriptlang.org/docs/handbook/2/basic-types.html#noimplicitany
//   - https://www.typescriptlang.org/tsconfig/#noImplicitAny
//  Union Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
//  Type Narrowing: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

function greet(p) {
	// todo: implementieren
}

// Wenn du greet richtig implementiert hast, sollte diese
// Datei beim ausführen keinen Fehler werfen
assertEqual(greet(), "Hello");
assertEqual(greet(null), "Hello");
assertEqual(greet(undefined), "Hello");
assertEqual(greet("Susi"), "Hello, SUSI");
assertEqual(greet(""), "Hello, ");

// OPTIONAL/ZUSATZAUFGABE: Callback-Funktion als Parameter
//  - Wenn du die Zusatzaufgabe machst, bitte Zeile
//    einkommentieren:
// assertEqual(greet( () => "Klaus"), "Moin, KLAUS");


function assertEqual(actual: any, expected: any) {
	if (actual !== expected) {
		throw new Error(`Actual value '${actual}' does not match expected value '${expected}'`)
	}
}

