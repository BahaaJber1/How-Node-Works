import EventEmitter from "node:events";
import http from "node:http";

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
	console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
	console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
	console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.on("newSale", (stock, name) => {
	console.log(`Hello there, ${name}!`);
});

myEmitter.emit("newSale", 9, "Bahaa");

/**
 * You'll notice that the 'request' event is emitted twice, and both listeners are called.
 * But why you see 2 "Request received" & "Another request received" logs?
 * This is because the server is receiving 2 requests: one for the favicon and one for the actual page request.
 * Browsers automatically request the favicon.ico file to display the website's icon in the browser tab.
 * If you want to avoid handling the favicon request, you can add a condition to check the URL of the request.
 */

const server = http.createServer();

server.on("request", (req, res) => {
	console.log("Request received");
	res.end("Request received");
});

server.on("request", (req, res) => {
	console.log("Another request received");
});

server.on("close", () => {
	console.log("Server closed");
});

server.listen(8000, () => {
	console.log("Waiting for requests...");
});
