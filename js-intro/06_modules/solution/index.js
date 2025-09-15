console.log("Please edit index.js");

import createPerson from "./person/createPerson.js";
import { birthday, greeter } from "./utils.js";

const klaus = createPerson({ name: "Klaus", age: 34 }, { city: "Aachen", street: "Hauptstraße" });
const susi = createPerson({ name: "Susi" }, { city: "Mainz", street: "Bahnhofstraße" });
const walter = createPerson({ name: "Walter", age: 42 }, { city: "Hamburg", street: "Reeperbahn" });

console.log("klaus", klaus);
console.log("susi", susi);
console.log("walter", walter);
//

const persons = [klaus, susi, walter];

console.log(birthday(persons, "Klaus"));
console.log(birthday(persons, "Susi"));
console.log(birthday(persons, "Walter"));

