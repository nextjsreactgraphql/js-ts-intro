let a = hello + "World"

let value = undefined;
typeof value === "undefined"

function jQuery() {
  const title = "...";
  function start() { }
  
  return {
    addClass() {},
    removeClass() {}
  }
}

const $ = jQuery();
q.addClass();

const name = "Susi''''' ";

const vorname = '<div class="...">';

// Template String (with ``)
const greet = `Hello, ${name}`; // Hello, Susi

// Zeilenumbrüche bleiben erhalten:
const letter = `Hello, ${name},

thanks for subscribing to our e-mail newsletter.

Yours, Edgar`;



function printer(getMessageFn) {
  console.log(getMessageFn())
}

// "inline" Funktion
printer(function() { return "Hello, World"} );

function helloWorld() { return  "Hello, World" };
printer(helloWorld);

function greet(phrase, ...names) {
  names[0]
  // ...
}

greet("Hello", "World", "Peter", "Susi");

function hello() {
  return "Hello" +
    "World"
    ;
}
const h = hello();

// FUNCTION
function g1() { return "Hallo Welt" }
g1();
//const g2 = g1;
//g2();
const g3 = () => { return "Hallo Welt"}
g3();

const g4 = function() { return "Hallo Welt" };
g4();

function helloWelt() {
  // "Hoisting"
  g1_a()

  function g1_a() { return "Hallo Welt" }
}

//const person = {
//  sayHello() { this.sayMoin() },
//  sayMoin: () => { this.sayHello() }
//}

function helloWelt_2() {
  g4_b();
  const g4_b = function() { return "Hallo Welt" };
//  g4_b.zusaetzliches_property = "Hallo Welt";

  // ...
}


////////////////////////////////////////////

const fruits = ["apple", "orange"];
const fruits_ = {0: "apple", 1: "orange"};
fruits = [ "" ];
fruits = null;

const ix = 0;

fruits[0] = "banane";
fruits[ix];

const person = {
  firstname: "...",
  23: "dreiundzwanzig",
  getCity: function (msg) { return "" },
  getBirthday() { return "... " }
}

person.getCity();
person.getBirthday();

const key = "firstname";
person["firstname"]
person[23]
person[key];

// -------------------------------------------------------
// 3 Parameter:
function printPerson_a( name, age, city="Bonn" ) {}
printPerson_a("...", 23, "Berlin");

// 1 Parameter
function printPerson( {name, age, city = "Bonn", ...alleAnderenProperties} ) {
  console.log(`${name}, ${age} years, lives in ${city}`);
}

function printPersonOhneDestrukturierung(person) {
  person.name;
  person.age;
  person.city;
  person.street;
  person.fasdfasdfasdf;
}

const person2 = { name: "Klaus", age: 32, street: "Hauptstraße" };
printPerson( person2 )
//person2.name = "";


// const [ hamburg , bonn] = cities

// ----------------------------------------------
function add(a, b) {
  // typeof a === "number"

  if (a === null || a === undefined) {
    // ...
  }

  if (!a || !b) {
    throw new Error("Invalid Argument!");
  }

  return a + b;
}

// Destrukturierung
const person = { name: "Klaus", age: 32};
const person_doppel_alt = { age: 33, name: "Klaus", age: 32};

const person_copy = { ...person }; // -> { name: "Klaus", age: 32}
const person_copy_2 = { age: 33, ...person }; // -> { age: 32, name: "Klaus", age: 32}
const person_copy_3 = { ...person, age: 33, city: "Hamburg" }; // -> { age: 32, name: "Klaus", age: 33, city: "Hamburg"}
