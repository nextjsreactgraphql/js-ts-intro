console.log("Please edit index.js");

// 1. VERSCHIEBE DIE FOLGENDEN FUNKTIONEN IN EIGENE MODULE
//    createPerson: nach person/createPerson.js. Exportiere createPerson dort mit einem Default Export
//    birthday und greet: in diesem Verzeichnis in "utils.js". Exportiere sie dort jeweils mit einem
//      benannten Export
// 2. IMPORTIERE die drei Funktionen in dieser Datei
//     Die Datei sollte danach ausführbar sein mit Node.js

function createPerson({ name, age = 18 }, additionalData) {
  return { name, age, ...additionalData };
}

function birthday(persons, name) {
  return persons.map(p =>
    p.name === name
      ? {
          ...p,
          age: p.age + 1
        }
      : p
  );
}

function greet({ name }) {
  console.log(`Hello, ${name}`);
}

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

greet({name: "Paula"});

// REFERENZ:
// import Statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// export Statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export