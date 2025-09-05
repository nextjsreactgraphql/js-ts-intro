export default undefined;

// VORBEREITUNG:
//  - Entferne die erste Zeile in dieser DAtei ("// @ts-nocheck")
//    - Damit "aktivierst" du TypeScript in dieser Datei
//    - Deine IDE zeigt dir jetzt TS-Fehler an (wenn es welche gibt)
//
// AUSFÜHREN DER DATEI:
//  Node.js kann erst aber Version 24 TypeScript-Dateien "ohne Weiteres" ausführen. Daher:
//  - Entweder direkt aus IntelliJ (Context Menu -> Run...)
//  - oder per node auf der Kommandozeile:
//    - Node (älter als V24): node --experimental-transform-types 20_a_objects.ts
//    - Node (ab Version 24): node 20_a_objects.ts
//
// AUFGABE:
//  - Beschreibe ein Objekt 'Person' mit den folgenden Eigenschaften:
//    - salutation (String oder null)
//    - firstname (String)
//    - age (Zahl)
//    - hobby (String, optional)
//    - greet: Eine Funktion, die einen String entgegennimmt und einen String zurückliefert
//
// ZUSATZAUFGABE:
//  - siehe unten
//
// REFERENZ:
//  Type Aliase: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
//  Objekt-Typen: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
//  Beschreiben von Funktionssignaturen: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
//  Für die Zusatzaufgabe:
//   Type Narrowing mit in-Operator: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

type Person = {
	// todo: beschreiben
}

// wenn Person korrekt beschrieben ist, dann dürfen hier
// keine Fehler angezeigt werden:

const p1: Person = {
	firstname: "Susi",
	salutation: "Ms",
	age: 32,
	hobby: "JavaScript",
	greet(p) { return `Hello, ${p}`}
}
const p2: Person = {
	firstname: "Susi",
	salutation: null,
	age: 32,
	greet(p) { return `Hello, ${p}`}
}

// Falsche Werte
//   Achtung! 'ts-expect-error' sagt TypeScript,
//     dass hier ein Fehler _erwartet_ wird
//     Wir sagen also TS, wir machen hier etwas bewusst falsch
//  Wenn du den Person Typen korrekt beschrieben hast,
//    dürfen hier keine Fehler auftreten
//    Beispiel:
//     "salutation: 3" hat einen falschen Typ (kein String)
//     da wir TS mit ts-expect-error sagen, dass wir diesen
//     Fehler _erwarten_ wird TS hier keinen Fehler anzeigen
//     außer, wenn es keinen Fehler gibt 🤯
//     (also wenn du fälschlicherweise im Person-Typ für
//     salutation auch eine Zahl erlauben würdest)
//   Kurzfassung: auch hier dürfen keine Fehler von TS angezeigt
//    wenn, selbst wenn die Werte nicht zu deinem Typen passen.
const p3: Person = {
	firstname: "Susi",
	// @ts-expect-error
	salutation: 3,
	// @ts-expect-error
	age: null,
	// @ts-expect-error
	greet(p: number) { return `Hello, ${p}`}
}

// ZUSATZ-AUFGABE
//   - Definiere einen zweiten Typen "Animal",
//      der nur eine Eigenschaft hat:
//       - "name" (String)
//   - Implementiere eine Funktion "greet",
//     die einen Parameter hat, der sowohl
//      Animal als auch Person sein kann, so dass man
//      die Funktion mit einer Person, aber auch mit einem
//      Animal aufrufen kann.
//   - Kannst du in der _Implementierung_ der Funktion unterscheiden,
//      ob ein Animal oder eine Person übergeben wurde,
//      und dann einen entsprechenden Gruß ausgeben:
//       - wenn Animal: dessen "name" verwenden
//       - wenn Person: deren "firstname" verwenden
//   -
type Animal = {
	// name
}