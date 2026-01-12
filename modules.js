// experimenting with module variables
// console.log(arguments);
// console.log(require("module").wrapper);

// for classes we use Uppercase naming convention
// using module.exports
const C = require("./test-module1-1");
const cacl1 = new C();
console.log(cacl1.add(2, 5));
console.log(cacl1.multiply(2, 5));

// using exports
const calc2 = require("./test-module-2"); // or directly destructure
const { add, multiply } = require("./test-module-2");
console.log(calc2); // gonna give us the whole object with its methods
console.log(calc2.add(2, 5));
console.log(calc2.multiply(2, 5));

console.log(add(10, 15));
console.log(multiply(10, 15));

// caching
require("./test-module-3")(); // no need to store in a variable since it just logs stuff
require("./test-module-3")();
require("./test-module-3")();
