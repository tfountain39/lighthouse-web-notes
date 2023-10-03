// Events:
// - Work with events for handling user interactions in web applications.
// Example:
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Modules:
// - Organize code into modules using import and export.
// Example:
// File: math.js
export function add(a, b) {
  return a + b;
}
// File: main.js
import { add } from "./math.js";

// Iterators and Generators:
// - Learn about iterators and generators for working with iterable data.

// Properties:
// - Use getters and setters for object property control.
// Example:
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
}

// Variables:
// - Declare variables using const, let, or var based on scoping needs.
// Example:
const constantValue = 42;
let mutableValue = 10;

// Comparison Operators & Equality:
// - Use === for strict equality comparison.
// Example:
const num1 = 42;
const num2 = "42";
if (num1 === num2) {
  // This block won't execute
}

// Blocks:
// - Use code blocks (curly braces) for grouping statements.
// Example:
if (condition) {
  // Code block
}

// Control Statements:
// - Use if, for, while, and other control statements for flow control.
// Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Comments:
// - Add comments for code documentation and clarity.
// Example:
// This is a comment explaining the following code.

// Whitespace:
// - Use consistent indentation and spacing for code readability.

// Commas:
// - Use commas to separate elements in lists.
// Example:
const numbers = [1, 2, 3, 4];

// Semicolons:
// - Use semicolons to terminate statements.
// Example:
const x = 10;

// Type Casting & Coercion:
// - Be aware of type casting and coercion rules in JavaScript.
// Example:
const strNum = "42";
const num = Number(strNum);

// Naming Conventions:
// - Follow naming conventions (e.g., camelCase, PascalCase) for consistency.
// Example:
const myVariable = 42;

// Accessors:
// - Implement getter and setter methods for object properties.
// Example:
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
  set celsius(value) {
    if (value < -273.15) {
      console.log("Temperature below absolute zero!");
      return;
    }
    this._celsius = value;
  }
}

// Events:
// - Work with events for handling user interactions in web applications.
// Example:
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Modules:
// - Organize code into modules using import and export.
// Example:
// File: math.js
export function add(a, b) {
  return a + b;
}
// File: main.js
import { add } from "./math.js";

// Iterators and Generators:
// - Learn about iterators and generators for working with iterable data.

// Properties:
// - Use getters and setters for object property control.
// Example:
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
}

// Variables:
// - Declare variables using const, let, or var based on scoping needs.
// Example:
const constantValue = 42;
let mutableValue = 10;

// Comparison Operators & Equality:
// - Use === for strict equality comparison.
// Example:
const num1 = 42;
const num2 = "42";
if (num1 === num2) {
  // This block won't execute
}

// Blocks:
// - Use code blocks (curly braces) for grouping statements.
// Example:
if (condition) {
  // Code block
}

// Control Statements:
// - Use if, for, while, and other control statements for flow control.
// Example:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Comments:
// - Add comments for code documentation and clarity.
// Example:
// This is a comment explaining the following code.

// Whitespace:
// - Use consistent indentation and spacing for code readability.

// Commas:
// - Use commas to separate elements in lists.
// Example:
const numbers = [1, 2, 3, 4];

// Semicolons:
// - Use semicolons to terminate statements.
// Example:
const x = 10;

// Type Casting & Coercion:
// - Be aware of type casting and coercion rules in JavaScript.
// Example:
const strNum = "42";
const num = Number(strNum);

// Naming Conventions:
// - Follow naming conventions (e.g., camelCase, PascalCase) for consistency.
// Example:
const myVariable = 42;

// Accessors:
// - Implement getter and setter methods for object properties.
// Example:
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
  set celsius(value) {
    if (value < -273.15) {
      console.log("Temperature below absolute zero!");
      return;
    }
    this._celsius = value;
  }
}