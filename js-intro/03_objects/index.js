import { strict as assert } from "node:assert";

console.log("Please edit index.js");

// Schreibe eine neue Funktion, 'birthday':
//    - Diese Funktion soll zwei Parameter bekommen:
//        1. 'persons', ein Array mit Person-Objekten ('name' und 'age')
//        2. 'name', ein String
//    - Die Funktion soll das Alter (age) aller Personen in dem Array um 1 erhöhen, deren Namen
//       dem übergebenen 'name'-Parameter entspricht
//       - Das übergebene Array soll dabei nicht verändert werden (Kopie anlegen!)
//       - Die einzelnen 'person'-Objekte innerhalb des Arrays sollen nicht verändert werden (ggf. Kopie anlegen!)
//          - Falls ein Objekt in Array beliebige weitere Properties (nicht nur 'name' und 'age') enthält,
//            sollen die zusätzlichen Properties in der Kopie enthalten sein
//       - Objekte, deren 'name' nicht mit dem 'name' übereinstimmen, der an 'birthday' übergeben wurde,
//          sollen unverändert zurückgegeben werden (keine Kopie erzeugen, sondern dasselbe Objekt zurückliefern)
//       - Um sicherzustellen, dass deine Funktion korrekt funktioniert, kannst Du unten die assert-Aufrufe
//         aktivieren. Diese stellen auch sicher, dass du die korrekten Objekte kopiert hast (und nicht
//         versehentlich die bestehenden Objekte veraendert hast)
//       - ZUSATZ Aufgabe:
//         Wenn die Liste den übergebenen 'name' nicht enthält, soll die Liste unverändert zurückgegeben werden
//    BEISPIELE:
// Bei diesen Personen:
const persons = [
  { name: "Klaus", age: 32 },
  { name: "Susi", age: 34, city: "Freiburg" },
  { name: "Walter", age: 45, address: { city: "Freiburg", street: "Mainstreet" } }
];

// Aufruf:
const res1 = birthday(persons, "Klaus");
// Erwartetes Ergebnis:
//[
//  { name: 'Klaus', age: 33 },
//  { name: 'Susi', age: 34, city: 'Freiburg' },
//  {
//    name: 'Walter',
//    age: 45,
//    address: { city: 'Freiburg', street: 'Mainstreet' }
//  }
//]
// zurückgegebene Liste muss neu sein
assert.notEqual(res1, persons);
// "Klaus" muss aktualisiert worden sein
assert.deepStrictEqual(res1[0], {name: "Klaus", age: 33});
// "Klaus" muss ein neues Objekt sein
assert.notEqual(persons[0], res1[0]);
// Person 1 und Person 2 sollen nicht verändert werden
assert.equal(res1[1], persons[1]);
assert.equal(res1[2], persons[2]);

// Aufruf:
 const res2 = birthday(persons, "Susi");
// Erwartetes Ergebnis:
//[
//  { name: 'Klaus', age: 32 },
//  { name: 'Susi', age: 35, city: 'Freiburg' },
//  {
//    name: 'Walter',
//    age: 45,
//    address: { city: 'Freiburg', street: 'Mainstreet' }
//  }
//]
assert.equal(res2[0], persons[0]);
assert.deepStrictEqual(res2[1], {name: "Susi", age: 35, city: "Freiburg"});
assert.equal(res2[2], persons[2]);


// Aufruf:
const res3 = birthday(persons, "Walter");
// Erwartetes Ergebnis:
// [
//  { name: 'Klaus', age: 32 },
//    { name: 'Susi', age: 34, city: 'Freiburg' },
//    {
//      name: 'Walter',
//      age: 46,
//      address: { city: 'Freiburg', street: 'Mainstreet' }
//    }
//  ]

assert.equal(res3[0], persons[0]);
assert.equal(res3[1], persons[1]);
assert.deepStrictEqual(res3[2], {name: "Walter", age: 46, address: persons[2].address });


