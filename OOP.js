// Object-Oriented Programming (OOP) Concepts and Best Practices

// Classes define blueprints for objects with data and methods
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Methods are functions associated with objects (e.g., driving, honking)
  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }
}

// Inheritance via 'extends' for sharing behavior
class Car extends Vehicle {
  constructor(make, model, color) {
    super(make, model); // 'super' calls the constructor of the parent class
    this.color = color;
  }

  // Additional behavior specific to cars
  honk() {
    console.log("Beep beep!");
  }

  // Overriding a method from the parent class
  drive() {
    super.drive(); // 'super' can be used to call methods from the parent class
    console.log(`The ${this.color} car is on the road.`);
  }
}

// Objects are instances of classes with their own properties
const car = new Car("Toyota", "Camry", "blue");

// Constructors are methods automatically called when creating instances
console.log(car.make); // Accessing property

// Always add parentheses when calling methods
car.drive(); // Calling an overridden method
car.honk(); // Calling a method

// Using get and set keywords for data getters and setters
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Using get method to compute a value when needed
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area); // Using get to compute area

class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // Prefixing property names with an underscore "_" indicates private access
  }

  // Using get method for data retrieval
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  // Using set method to validate data before updating
  set celsius(value) {
    if (value < -273.15) {
      console.log("Temperature below absolute zero!");
      return;
    }
    this._celsius = value;
  }
}

const temp = new Temperature(25);
temp.celsius = -300; // Setting temperature with validation

// Dependency injection provides objects with necessary information or resources
// - It's a programming technique where you provide an object with the information or resources it needs, making the code more adaptable and versatile in different situations.

// Best practice: Use class inheritance and extend subclasses for modularity
// - Object-Oriented Programming (OOP) goals: Reduce duplication and increase modularity

// Abstraction arranges complexity, suppressing lower-level details
// - Abstraction is a technique for arranging complexity. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level.

// Summary of OOP features:
// - Classes define blueprints for objects with data and methods
// - Inheritance via 'extends' for sharing behavior
// - Subclasses can override inherited methods
// - Use get and set keywords for data getters and setters