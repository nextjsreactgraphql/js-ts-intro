export default undefined;

/*
	- Objekte
	- Type Alias (auch für Funktion!)
	- type vs interface
	- Signaturen für Funktionen
	- Optionale Properties
		- null vs. undefined
	- nominal vs. structural
	- Intersection
	- Beispiel: Person und Animal
 */

const klaus = {
	firstname: "Klaus",
	age: 32
}
// Type Alias
type OptionalString = string | null | undefined;
// Type Alias
type GetNameFn = (lastname: string) => string;

// Type Alias

// Duck Typing
type Person = {
	firstname: string,
	age: number

	sayHello: (phrase: string) => string
}

type Animal = {
	firstname: string;
	age: number;
}

const p2 = {
	firstname: "Susi",
	age: 33
}

const x: Person = p2;
const y: Animal = p2;
const z: Person = y;

// interface IPerson {
// 	firstname: string,
// 	age: number
// }


type Address = {
	city: string;
}

function greet(p: Person | Address | Animal | GetNameFn) {
	if (typeof p === "object") {
		if ("firstname" in p) {
			return `Hello ${p.firstname.toUpperCase()} ${p.age}`
		} else {
			return p.city.toUpperCase();
		}

	}

	p("");



}

greet(klaus)