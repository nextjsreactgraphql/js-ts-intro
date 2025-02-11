export default undefined;

/*
 - device-Beispiel
 -   create-Device mit Port
 -   tagged union type mit LPDevice und ComDevice
 -
 */

type Port = "LPT1" | "COM1";

type ComDevice = {
	port: "COM1",
	communicate: () => void
}

function a1(): void {
	return undefined;
}

const e = a1();

type PrinterDevice = {
	port: "LPT1",
	print: () => void
}

type SuccessServerResponse = {
	success: true;
	data: any;
}

type ErrorServerResponse = {
	success: false;
	errorMessage: string;
}

const sieben: 7 = 7;

// Tagged Union Type

function useDevice(dev: ComDevice | PrinterDevice) {
	if (dev.port === "LPT1") {
		return dev.print();
	}

	return dev.communicate();
}

function getDevice(port: Port) {

}

getDevice("LPT1")
getDevice("LPT2")
getDevice("COM1")

console.log("LPT1");