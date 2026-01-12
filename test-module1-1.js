// we can do this approach or the other one

// class Calculator {
// 	add = (a, b) => a + b;

// 	multiply = (a, b) => a * b;

// 	subtract = (a, b) => a - b;

// 	divide = (a, b) => a / b;
// }

// module.exports = Calculator;

module.exports = class {
	add = (a, b) => a + b;
	multiply = (a, b) => a * b;
	subtract = (a, b) => a - b;
	divide = (a, b) => a / b;
};
