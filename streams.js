import fs from "fs";
import { createServer } from "http"; // const server = require('http').createServer;

const server = createServer();

server.on("request", (req, res) => {
	// Solution 1: Using readFile (not optimal for large files) node needs to load the entire file into memory before sending it to the client

	// fs.readFile("test-file.txt", (err, data) => {
	// 	if (err) console.log(err);
	// 	res.end(data);
	// });

	// Solution 2: Using streams to read the file in chunks and send it to the client
	
	// This can cause a problem called backpressure where the writable stream (res) is slower than the readable stream (fs.createReadStream)
	// const readable = fs.createReadStream("test-file.txt");
	// readable.on("data", (chunk) => {
	// 	res.write(chunk);
	// });

	// readable.on("end", () => {
	// 	res.end();
	// });

	// readable.on("error", (err) => {
	// 	console.log(err);
	// 	res.statusCode = 500;
	// 	res.end("File not found");
	// });

	// Solution 3: Using pipe to automatically handle backpressure
	const readable = fs.createReadStream("test-file.txt");
	// readableSource.pipe(writableDestination);
	readable.pipe(res);
});

server.listen(8000, () => {
	console.log("Listening to requests on port 8000");
});
