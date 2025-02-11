export default undefined;

/*
 Promise
 Array
 evtl. useState-Beispiel
*/


const js_a = [ 1, true, {firstname: "..."} ]

const ts_a: Array<string | number> = [ "...", 1, 2, 3];
const ts_b: string[] = ["...", ""]

function query(): Promise<string | number> {
	return new Promise( () => {});
}

query()
	.then(data => data)

type Animal = {
	firstname: string;
	age: number;
}

type RAnimal = {
	readonly firstname: string;
	readonly age: number;
}

// <Title size="xl">...</Title>
type TitleProps = Readonly<{
	size: string
}>

function Title(props: TitleProps) {
	props.size = "sm";
}

// Utility Typen
function logAnimal(a: Readonly<Animal>) {
	a.age = 32;
	a.firstname = "...";
}

function patchAnimal(a: Partial<Animal>) {

}

const a: Animal = {
	firstname: "Mausi", age: 3
}

a.age = 4;
a.firstname = "fasdfasdf"



