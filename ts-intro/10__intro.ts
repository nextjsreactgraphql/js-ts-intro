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









// 'let' erzeugt eine Variable

let x: string | null = "Hallo"; // typeof x === "string"
//        ^-------^----  union type

x = null;

// "any" => alles ist erlaubt
let a: any;

//      - OPTIONAL/ZUSATZAUFGABE: p darf eine Funktion (!) sein, die einen String _zurückliefert_
//    - OPTIONAL/ZUSATZAUFGABE: wenn p eine Funktion ist, soll sie die Funktion ausführen, und
//        mit dem Rückgabe-Wert einen Gruß bilden:
//        "Moin, " + Rückgabewert in Großbuchstaben (toUpperCase())

const klaus = {
	firstname: "Klaus",
	age: 32,
	greet(phrase: string): string {
		return phrase + " " + this.firstname
	},
	greet_2: function(phrase: string): string {
		return phrase + " " + this.firstname
	}
};

//  Structural typing (TS), "Duck Typing"
// Nominal typing (Java Name relevant)

// Type Alias
type OptionalePerson = Person | null;

function sayGoodbye(p: OptionalePerson) {}

// let ja: "Ja" = "Nein";
// "tagged union type"
type Person = {
	__typeName: "Person", // <-- tag
	firstname: string,
	age: number ,
	greet(phrase: string): string;
	// greet_2: (phrase: string) => string
}

type Animal = {
	__typeName: "Animal", // <-- tag
	id: string;
	name: string,
	age: number
}

type NewAnimal = Omit<Animal, "id">;

// Utility Typen
//  Omit
function saveAnimal(a:Readonly<Animal>) {
	// a.age = 11;
}

function updateAnimal(a: Animal) {
	a.name = "Mietzekatze";
	a.age = 10;
}

type Data = {
	// status: "SUCCESS"
	isSuccess: true
	payload: any
}

type RequestError = {
	// status: "ERROR"
	isSuccess: false
	errorMessage: string
}

// Type Predicate Function
//

function handleServerResponse(d: Data | RequestError) {
	if (d.isSuccess) {
		d.payload
	} else {
		d.errorMessage
	}
	// ...
}

// Type Predicate function
function isPerson(x: Person|Animal): x is Person {
	return x.__typeName === "Person"
}

const personsOrAnimals: Array<Person|Animal> = [];

function getFirst<T>(t: T[]): T {
	return t[0];
}

const firstPerson = getFirst(personsOrAnimals)

const personen = personsOrAnimals.filter(isPerson)

// Type Assertion Function
function assertIsPerson(x: Person|Animal): asserts x is Person {
	if (x.__typeName !== "Person") {
		throw new Error("Keine Person!")
	}
}

function say(x: Person | Animal) {
	assertIsPerson(x);
	if (isPerson(x)) {
		x.firstname
	}
}

// interface IPerson  {
// 	firstname: string,
// 	age: number
// }

type GreetFn = ( person: string | null ) => string;

const sayGude: GreetFn = p => {
	return ""
}

const sayMoin = (person: string | null ): string => {
	return "";
}

// Wie sagen wir TS, wenn ein String reinkommt, kommt number zurück, sonst null
//   Conditional Type
function getLength<T extends string|null>(s: T): T extends string ? number : null {
	if (s === null) {
		return null;
	}

	return s.length;
}



const v1 = getLength("Hallo");
const v2 = getLength(null)

// Wann Return-Type angeben?

function sayHello(person?: string | null | Person): string {

	if (person === null || person === undefined) { // Type Guards
	// if (typeof person !== "string") {   // Type Narrowing (Type Widening)
	// if (!person) {
	// 	person
		// null oder undefined
		// oder string

		return "";
	}

	if (typeof person === "object") {
		// const x = person.greet("...")
		return "Hello " + person.firstname.toUpperCase() + " du bist " + person.age + " Jahre alt."
	}

	return "Hello " + person.toUpperCase();
}

sayHello();
sayHello(null);
sayHello(klaus)
// sayHello({
// 	name: "Klaus",
// 	age: 32
// })

let hello = sayHello("Susi");
hello.toUpperCase();


// x = 7; // typeof x === "number"
//
// x = false; // typeof x === "boolean"
//
// x = function() { return "Hallo" } // typeof x === "function"
//
// x.toUpperCase(); // Ouch 😱
//








