// ***********************
// Function Declaration
// ***********************
function functionName(parameters) {
  // Function body
  // Code to be executed
  return result; // Optional
}
  

// ***********************
// Function Expression
// ***********************
const functionName = function(parameters) {
  // Function body
  // Code to be executed
  return result; // Optional
};


// ***********************
// Arrow Function (ES6+)
// ***********************  
const functionName = (parameters) => {
  // Function body
  // Code to be executed
  return result; // Optional
};

// ***********************
// Function Parameters
// ***********************
  function add(a, b) {
  return a + b;
}

// ***********************
// Function Invocation
// ***********************
  const result = functionName(arguments); // Call a function

// ***********************
  // Function Return
// ***********************
  function multiply(a, b) {
  return a * b;
}
const product = multiply(5, 3); // product is now 15

// ***********************
// Default Parameters (ES6+)
// ***********************
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
  
// ***********************
// Rest Parameters (ES6+)
// ***********************
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
  
// ***********************
// Spread Operator (ES6+)
// ***********************
const numbers = [1, 2, 3];
const combined = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
  
// ***********************
// Anonymous Functions
// ***********************
const anonymous = function() {
  

  // Function body
};

// ***********************
// Immediately Invoked Function Expression (IIFE)
// ***********************
(function() {
  // Code here
})();
Higher-Order Functions
Functions that take other functions as arguments or return functions.
  

// ***********************
// Callback Functions
// ***********************
function fetchData(url, callback) {
  // Fetch data
  callback(data);
}
  

// Closure
// A function that remembers variables from its parent scope even after the parent function has finished executing.

// Function Scope
// Variables declared inside a function are scoped to that function.

// Lexical Scope
// Variables declared outside a function are accessible within the function (closure).

// Named vs. Anonymous Functions
// Named functions have a name identifier; anonymous functions do not.

// Recursion
// A function calling itself to solve a problem.

// Function Hoisting
// Function declarations are hoisted to the top of their containing scope.

// Arrow Functions vs. Regular Functions
// Arrow functions have a shorter syntax and do not have their own "this" context.

// Arguments vs. Parameters
// Parameters are the variables in the function definition. Arguments are the values passed when invoking a function.

// This cheat sheet covers the basics of JavaScript functions. Remember that JavaScript has many more advanced features and concepts related to functions, so it's important to explore further for more advanced use cases.

// ***********************
// Object Declaration

// ***********************
const obj = {}; // An empty object

// ***********************
// Object Literal
// ***********************
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// ***********************
// Accessing Object Properties
// ***********************
const firstName = person.firstName; // Dot notation
const lastName = person["lastName"]; // Bracket notation


// ***********************
// Adding/Modifying Properties
// ***********************
person.age = 31; // Modifying an existing property
person.city = "New York"; // Adding a new property


// ***********************
// Deleting Properties
// ***********************
delete person.age; // Delete a property

// ***********************
// Object Methods
// ***********************
const car = {
  brand: "Toyota",
  model: "Camry",
  start: function() {
    console.log("Engine started.");
  },
  stop() {
    console.log("Engine stopped.");
  },
};
  
// ***********************
// Object Constructor
// ***********************
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

const myDog = new Dog("Buddy", "Golden Retriever");

// ***********************
// Object Prototypes
// ***********************
Dog.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};
myDog.bark(); // "Buddy barks!"


// ***********************
// Object Destructuring (ES6+)
// ***********************
const { firstName, lastName } = person;

// ***********************
// Object Spread Operator (ES6+)
// ***********************
const details = { ...person, nationality: "American" };


// Object Keys and Values (ES6+)
const keys = Object.keys(person); // Returns an array of keys
const values = Object.values(person); // Returns an array of values


// Object Entries (ES6+)
javascript
Copy code
const entries = Object.entries(person); // Returns an array of [key, value] pairs


// ***********************
// Object Methods (ES6+)
// ***********************
const person = {
  sayHello() {
    console.log("Hello!");
  },
  sayAge: () => {
    console.log(this.age); // Arrow functions have no "this" context
  },
};
person.sayHello(); // "Hello!"
person.sayAge(); // undefined


// ***********************
// JSON (JavaScript Object Notation)
// ***********************
const jsonString = '{"name":"Alice","age":25}';
const parsedObject = JSON.parse(jsonString); // Convert JSON to object
const jsonString2 = JSON.stringify(parsedObject); // Convert object to JSON

// ***********************
//Object Equality
// ***********************
// Two objects are equal only if they reference the same memory location. Use custom comparison logic for deep equality.

// This cheat sheet covers the basics of working with JavaScript objects. JavaScript objects are versatile and can be used to represent a wide range of data structures, making them a fundamental part of the language.

// Certainly! Here's a JavaScript conditionals cheat sheet with explanations of when and where each conditional statement should be used:


// ***********************
// if Statement
// ***********************  

if (condition) {
  // Code to execute if the condition is true
}
// Use when: You want to execute a block of code only if a specific condition is met.

// else Statement
  

if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
// Use when: You want to execute one block of code if a condition is true and another block if the condition is false.

// else if Statement
  

if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if neither condition1 nor condition2 is true
}
// Use when: You have multiple conditions to check, and you want to execute code based on the first condition that is true.


// ***********************
// Ternary Operator (Conditional Operator)
  // ***********************
const result = condition ? valueIfTrue : valueIfFalse;
// Use when: You want to assign a value to a variable based on a simple condition in a concise way.

// ***********************
// Switch Statement
// ***********************  
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if expression doesn't match any case
}
// Use when: You have multiple possible values of an expression to check, and you want to execute different code for each value.

// ***********************
// Logical Operators
// ***********************
// && (Logical AND): Use when you need to ensure that multiple conditions are true before executing code.
// || (Logical OR): Use when you want to execute code if at least one condition is true.
// ! (Logical NOT): Use when you need to negate a condition.
// Use when: You want to combine or negate conditions to control the flow of your code.

// ***********************
// Comparison Operators
// ***********************
// ==, ===, !=, !==, >, <, >=, <=: Use these when you need to compare values and make decisions based on the comparison result.
// Use when: You want to compare values to determine the flow of your program.

// ***********************
// Truthy and Falsy Values
// ***********************
// Understand truthy and falsy values when writing conditions to check the validity of values.

// Use when: You need to determine whether a value is considered valid (truthy) or not (falsy) in a condition.

// ***********************
// Short-Circuit Evaluation
// ***********************
// Utilize short-circuit evaluation with && and || to optimize conditionals by avoiding unnecessary evaluations.

// Use when: You have conditions that depend on multiple factors, and you want to improve performance.

// ***********************
// Nested Conditionals
// ***********************
// Nest conditional statements inside each other to handle complex branching logic.

// Use when: You have intricate decision-making requirements in your code.

// ***********************
// Conditional Execution in Loops
// ***********************
// Use conditionals within loops to control the iteration flow based on specific conditions.

// Use when: You want to control how a loop behaves based on certain conditions.

// Understanding when and where to use each type of conditional statement is crucial for effective decision-making and flow control in your JavaScript code.

// ***********************
// Creating Arrays
// ***********************  


const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];
// ***********************
// Accessing Elements
// ***********************  


const firstElement = numbers[0]; // Access by index (0-based)
const lastElement = fruits[fruits.length - 1]; // Access the last element


// ***********************
// Modifying Elements
// ***********************  

numbers[2] = 10; // Modify an element by index
fruits.push("orange"); // Add an element to the end
fruits.pop(); // Remove the last element


// ***********************
// Array Methods
// ***********************
// Use push() and pop() when: You need to add or remove elements at the end of the array.

// Use shift() and unshift() when: You need to add or remove elements at the beginning of the array.

// Use concat() when: You want to combine two or more arrays without modifying the original arrays.

// Use slice() when: You want to create a new array containing a portion of the original array.

// Use splice() when: You need to add or remove elements at a specific index within the array.

// Use indexOf() and lastIndexOf() when: You need to find the index of a specific element in the array.

// Use forEach() when: You want to execute a function for each element in the array.

// Use map() when: You want to create a new array based on the values of the existing array.

// Use filter() when: You want to create a new array containing elements that meet a specific condition.

// Use reduce() and reduceRight() when: You need to perform a cumulative operation on the array elements, such as summing or aggregating values.

// Use join() when: You want to convert the array elements into a single string with a specified separator.

// Use reverse() when: You need to reverse the order of elements in the array.

// Use sort() when: You want to sort the elements of the array, optionally using a custom comparison function.

// Use every() when: You need to check if all elements in the array satisfy a condition.

// Use some() when: You need to check if at least one element in the array satisfies a condition.

// Use find() when: You want to find the first element in the array that matches a condition.

// Use findIndex() when: You want to find the index of the first element in the array that matches a condition.

// ***********************
// Iterating Over Arrays
// ***********************
// Use a for loop when: You need full control over the iteration process, such as iterating backwards or skipping elements.

// Use forEach() when: You want to execute a function for each element in the array and don't need to break out of the loop prematurely.

// Use a for...of loop (ES6+) when: You want a concise way to iterate over the elements of an array, and you don't need the index or advanced control.

// ***********************
// Multi-Dimensional Arrays
// ***********************
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const value = matrix[1][2]; // Accessing elements in a 2D array
// Array Properties
length: Returns the number of elements in an array.
// Array Destructuring (ES6+)
  

const [first, second, third] = fruits; // Destructuring assignment
// // ***********************
Spread Operator (ES6+)
// ***********************


const combined = [...numbers, ...fruits]; // Combine arrays
// ***********************
// Array Searching and Filtering
// ***********************  

const filtered = numbers.filter(num => num > 3); // Filter elements
const found = fruits.find(fruit => fruit === "cherry"); // Find element
// ***********************
// Sorting Arrays
// ***********************


numbers.sort(); // Sort in lexicographic order
numbers.sort((a, b) => a - b); // Sort numerically (ascending)
numbers.sort((a, b) => b - a); // Sort numerically (descending)


// ***********************
// for Loop
// ***********************
for (let i = 0; i < length; i++) {
  // Code to be executed on each iteration
}
// Use when: You know the number of iterations in advance, and you want precise control over the loop.

while Loop
  

while (condition) {
  // Code to be executed as long as the condition is true
}
// Use when: You don't know the number of iterations in advance, and you want to continue looping until a specific condition is met.

do...while Loop
  

do {
  // Code to be executed at least once and then as long as the condition is true
} while (condition);
// Use when: You want to ensure that the loop body is executed at least once before checking the condition.

// for...in Loop
  

for (const key in object) {
  if (object.hasOwnProperty(key)) {
    // Code to access object[key]
  }
}
// Use when: You want to iterate over the keys (properties) of an object. Be cautious and use hasOwnProperty() to avoid iterating over inherited properties.

// for...of Loop (ES6+)
  

for (const element of iterable) {
  // Code to access each element
}
// Use when: You want to iterate over the values of an iterable (e.g., arrays, strings) without dealing with indexes or keys. It's more concise than a for loop for this purpose.

// Nested Loops
  

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    // Code to be executed for each combination of i and j
  }
}
// Use when: You need to perform repetitive operations within another loop.

// Breaking and Continuing
  

for (let i = 0; i < array.length; i++) {
  if (condition) {
    break; // Exit the loop
  }
  if (otherCondition) {
    continue; // Skip to the next iteration
  }
}
// Use break when: You want to exit the loop prematurely based on a condition.

// Use continue when: You want to skip the current iteration and proceed to the next one based on a condition.

// Infinite Loops
  

while (true) {
  // Code that runs indefinitely
}
// Use with caution: Infinite loops should be avoided unless you have a specific use case that requires one, and you have a plan for how to exit it.

// Loop Optimization
// Minimize calculations inside loops to improve performance.
// Use for...of or forEach for iterating over arrays when you don't need index information.
// Cache the length of an array when using a for loop to avoid recalculating it in each iteration.
// Choosing the Right Loop
// Use a for loop when you know the number of iterations.
// Use a while or do...while loop when the number of iterations is not known in advance or when you want to ensure at least one iteration.
// Use for...in to iterate over object properties (with hasOwnProperty() check).
// Use for...of to iterate over iterable values (e.g., arrays, strings).
// This cheat sheet provides guidance on choosing the appropriate loop construct for different situations in JavaScript. The choice of loop depends on the specific requirements of your code and the type of data you are working with.