import { strict as assert } from "node:assert";

console.log("Please edit index.js");

const persons = [
  { name: "Klaus", age: 32 },
  { name: "Susi", age: 34, city: "Freiburg" },
  { name: "Walter", age: 45, address: { city: "Freiburg", street: "Mainstreet" } }
];

function birthday(persons, name) {


  //       - ZUSATZ Aufgabe (OPTIONAL):
  //         Wenn die Liste den übergebenen 'name' nicht enthält, soll die Liste unverändert zurückgegeben werden
  if (!persons.find(p => p.name === name)) {
    return persons;
  }

  // persons.map sorgt dafür, dass wir ein neues
  // Array erzeugen (übergebenes persons-Array bleibt unverändert)

  // Die jeweiligen person-Objekte werden nur kopiert
  // und angepasst, wenn ihr name dem übergebenen name
  // entspricht. Alle anderen Person-Objekte in dem Array
  // werden direkt zurückgeliefert (keine Notwendigkeit, eine Kopie zu erzeugen)
  return persons.map(p =>
    p.name === name
      ? {
          ...p,
          age: p.age + 1
        }
      : p
  );
}

const res1 = birthday(persons, "Klaus");
console.log("res1", res1)
assert.deepStrictEqual(res1[0], {name: "Klaus", age: 33});
// Person 1 und Person 2 sollen nicht verändert werden
assert.equal(res1[1], persons[1]);
assert.equal(res1[2], persons[2]);


const res2 = birthday(persons, "Susi");
console.log("res2", res2);
assert.equal(res2[0], persons[0]);
assert.deepStrictEqual(res2[1], {name: "Susi", age: 35, city: "Freiburg"});
assert.equal(res2[2], persons[2]);

const res3 = birthday(persons, "Walter");
console.log("res3", res3);
assert.equal(res3[0], persons[0]);
assert.equal(res3[1], persons[1]);
assert.deepStrictEqual(res3[2], {name: "Walter", age: 46, address: persons[2].address });

// ZUSATZ: GESUCHTE PERSON NICHT VORHANDEN
const res4 = birthday(persons, "Lothar Matthäus");
console.log("res4", res4);
assert.equal(res4, persons);
