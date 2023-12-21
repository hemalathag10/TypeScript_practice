"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Class implementing FascinatingNumberChecker interface
class LotteryNumberGenerator {
    isFascinatingNumber(num) {
        const multipliedBy2 = num * 2;
        const multipliedBy3 = num * 3;
        const concatenatedResult = `${num}${multipliedBy2}${multipliedBy3}`;
        const uniqueDigits = new Set(concatenatedResult);
        return uniqueDigits.size === 9 && !uniqueDigits.has('0');
    }
    generateRandomFascinatingNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 1000) + 100; // Generating 3-digit random numbers
        } while (!this.isFascinatingNumber(randomNumber));
        return randomNumber;
    }
}
// Class representing the Lottery Application
class LotteryApplication {
    constructor(numberGenerator) {
        this.numberGenerator = numberGenerator;
        this.winningNumbers = Array.from({ length: 3 }, () => this.numberGenerator.generateRandomFascinatingNumber());
        this.winnerIndex = Math.floor(Math.random() * this.winningNumbers.length);
    }
    runLottery() {
        console.log('Welcome to the Lottery Application!');
        console.log('Winning Numbers:', this.winningNumbers);
        let userTicket;
        // Ask the user to enter a number among the winning numbers
        do {
            const userTicketString = readlineSync.question('Enter Your Lottery Number: ');
            userTicket = parseInt(userTicketString, 10);
            if (isNaN(userTicket)) {
                console.log('Invalid input. Please enter a valid number.');
            }
            else if (!this.winningNumbers.includes(userTicket)) {
                console.log('Sorry, the entered number is not among the winning numbers. Try again.');
            }
        } while (isNaN(userTicket) || !this.winningNumbers.includes(userTicket));
        const isUserWinner = this.winningNumbers[this.winnerIndex] === userTicket;
        console.log(`Your Ticket: ${userTicket}`);
        console.log(isUserWinner ? 'Congratulations! You are a winner!' : 'Sorry, you did not win this time.');
    }
}
// Create an instance of LotteryNumberGenerator
const numberGenerator = new LotteryNumberGenerator();
// Create an instance of LotteryApplication with the number generator
const lotteryApp = new LotteryApplication(numberGenerator);
// Run the lottery application
lotteryApp.runLottery();
