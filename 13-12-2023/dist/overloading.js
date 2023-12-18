"use strict";
// Define a class representing a person
class Person {
    // Constructor with optional parameters and default values
    constructor(firstName, lastName) {
        // Use nullish coalescing to provide default values
        this.firstName = firstName !== null && firstName !== void 0 ? firstName : 'John';
        this.lastName = lastName !== null && lastName !== void 0 ? lastName : 'Doe';
    }
    greet(greeting) {
        // Use nullish coalescing to provide a default greeting
        const defaultGreeting = 'Hello';
        console.log(`${greeting !== null && greeting !== void 0 ? greeting : defaultGreeting}, ${this.firstName} ${this.lastName}!`);
    }
}
// Example usage of the Person class
const person1 = new Person(); // Creating a person with default values
const person2 = new Person('Alice', 'Smith'); // Creating a person with custom values
// Greeting examples using function overloading
person1.greet(); // Outputs: Hello, John Doe!
person1.greet('Hi'); // Outputs: Hi, John Doe!
person2.greet(); // Outputs: Hello, Alice Smith!
person2.greet('Hey'); // Outputs: Hey, Alice Smith!
