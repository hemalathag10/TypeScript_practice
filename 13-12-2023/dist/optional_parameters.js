"use strict";
// Function with an optional parameter
const greet = (name) => {
    if (name) {
        console.log(`Hello, ${name}!`);
    }
    else {
        console.log('Hello, Guest!');
    }
};
// Example usage
greet();
greet('John');
