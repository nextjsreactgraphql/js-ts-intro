// @ts-nocheck
export default undefined;

type Person = {
	id: string;
	firstname: string;
	age: number;
	registered: boolean;
}

// VORBEREITUNG:
//   - Entferne die Zeile '// @ts-nocheck' am Beginn der Datei,
//     damit TS hier Fehler anzeigt
//
// AUSFÜHREN DER DATEI:
//  Node.js kann erst aber Version 24 TypeScript-Dateien "ohne Weiteres" ausführen. Daher:
//  - Entweder direkt aus IntelliJ (Context Menu -> Run...)
//  - oder per node auf der Kommandozeile:
//    - Node (älter als V24): node --experimental-transform-types 50_a_utility_types.ts
//    - Node (ab Version 24): node 50_a_utility_types.ts
//
// AUFGABE:
//   Die Funktion 'newPerson' soll einen korrekten Typen für
//   // den Parameter 'p' bekommen ('any' bitte entfernen)
//    - Verwende einen Utility-Typen, um - basieren auf Person -
//      einen Typen zu erzeugen, der Person entspricht,
//      allerdings OHNE das 'id'-Property
//      (Möglicher Use-Case: es gibt diesen Typ für "fertige" Personen,
//      und wir brauchen einen Typen für "neue" Personen, die noch
//      keine Id haben)
declare function newPerson(p: any): void;

// Das soll funktionieren
newPerson({
	firstname:  "Klaus",
	age:        32,
	registered: false
});

newPerson({
// @ts-expect-error
	id:         "p-2",
	firstname:  "Klaus",
	age:        32,
	registered: false
});

// AUFGABE 2: patchPersons soll eine Liste von 'Person'en entgegen nehmen
//  (any bitte enfernen)
//  - Die Liste soll nicht veränderbar sein!
//  - Die übergebenen Personen sollen eine beliebige Untermenge des
//     Person-Typs sein
//     (man kann also alle Properties weglassen oder angeben, je nachdem
//     welche Properties man in dem Objekt "patchen" möchte)
//  - Die Person-Objekte sollen nicht veränderbar sein
//     (patchPersons speichert die Objekte vielleicht auf dem Server
//     oder einer DB, soll die Objekte selber aber nicht anpassen)
//
function patchPersons(persons: any) {

	// @ts-expect-error persons sollte eine schreibgeschützte Liste sein,
	//   darauf darf 'push' nicht aufgerufen werden
	persons.push({
		id:         "p-1",
		firstname:  "Susi",
		age:        34,
		registered: true})

	// Das sollte gehen: persons muss eine Liste sein
	persons.forEach(p => {
		// @ts-expect-error: P sollte read-only sein, deswegen
		//  kann age nicht zugewiesen werden
		p.age = 77;
		// @ts-expect-error: firstname sollte optional sein
		//  und deswegen möglicherweise undefined
		p.firstname.toUpperCase();

		// Das sollte gehen, denn wenn firstname am Objekt vorhanden ist,
		//  muss es ein String sein, so dass toUpperCase() augerufen werden kann
		p.firstname?.toUpperCase();
	})
}

// REFERENZ:
//  Array und ReadonlyArray:
//     https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
//     https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
//  Eingebaute Utility-Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
//     Omit Utility Type: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
