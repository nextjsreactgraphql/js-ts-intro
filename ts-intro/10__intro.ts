export default undefined;

/*
- TS als add-on auf JavaScript
	- Typ Angaben vs. generierter Code
- Statisches vs. dynamisches Typsystem
- TS Language Server (Beispiel: IDE VS Code im JS-Code der bisherigen Übungen)
- Ableiten von Typen
  - any und implizit any
- Standard-Datentypen (noch keine Objekte)
- null OR undefined, union typen, Teil 1
- optionale Funktionsargumente mit ?
- Type narrowing
*/

// let creates a variable
let x: string | null = "Hallo";
x = "Moin";
x = null;
// x = undefined;

let a = 1 + 2
let b = false;

let d: any;

// function greet(person: boolean) {
//
// }

function greet(person?: string | null) {    // Type Narrowing
	if (person === null) {   // "Type Guard"
		// person  null
		// person
		return "...";
	}

	if (typeof person === "undefined") {  // "Type Guard"
		return "kein gruss! :-( ";
	}

	return `Hello ${person.toUpperCase()}`
}

greet(null)
let g = greet(7777)
let greeting = greet("Klaus");

greeting.toUpperCase();



//
// // dynamic typing (vs static typing in C#, java, ...)
// x = 7; // typeof x === "number"
// x = false; // typeof x === "boolean"
//
// x = function() { return "Hallo" } // typeof x === "function"
//
// x.toUpperCase(); // Ouch 😱
