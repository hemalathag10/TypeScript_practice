import * as readlineSync from 'readline-sync';

// Prompt the user for a valid number
let userNumber: number;

do {
    const userInput = readlineSync.question('Enter a number: ');
    userNumber = parseFloat(userInput);
} while (isNaN(userNumber));

console.log(`You entered a valid number: ${userNumber}`);

