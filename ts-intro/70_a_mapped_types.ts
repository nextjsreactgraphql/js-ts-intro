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
// AUFGABE:
//   Die Funktion 'newPerson' soll einen korrekten Typen für
//   // den Parameter 'p' bekommen ('any' bitte entfernen)
//    - Der Parameter soll dem Typen Person entsprechen,
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

// Das soll nicht funktionieren (id angegeben):

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

		// AUFGABE / FRAGE:
		//  - Wir haben hier jetzt ein Objekt in der Hand. Angenommen es würde auf
		//  dem Server einen Endpunkt geben, der ein solches Objekt (Unterobjekt von Person)
		//  annehmen und speichern kann (PATCH /api/persons/personId).
		//  Wäre es eine gute Idee, das Objekt, so wie wir es hier zur Laufzeit
		//  haben, ungeprüft an das Backend zu senden?

	})
}

// REFERENZ:
//  Array und ReadonlyArray:
//     https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
//     https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type
//  Eingebaute Utility-Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
//     Omit Utility Type: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
