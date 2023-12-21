import * as readlineSync from 'readline-sync';

// Interface representing a FascinatingNumberChecker
interface FascinatingNumberChecker {
  isFascinatingNumber(num: number): boolean;
  generateRandomFascinatingNumber(): number;
}

// Class implementing FascinatingNumberChecker interface
class LotteryNumberGenerator implements FascinatingNumberChecker {
  isFascinatingNumber(num: number): boolean {
    const multipliedBy2 = num * 2;
    const multipliedBy3 = num * 3;

    const concatenatedResult = `${num}${multipliedBy2}${multipliedBy3}`;
    const uniqueDigits = new Set(concatenatedResult);

    return uniqueDigits.size === 9 && !uniqueDigits.has('0');
  }

  generateRandomFascinatingNumber(): number {
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * 1000) + 100; // Generating 3-digit random numbers
    } while (!this.isFascinatingNumber(randomNumber));

    return randomNumber;
  }
}

// Class representing the Lottery Application
class LotteryApplication {
  private readonly winningNumbers: number[];
  private readonly winnerIndex: number;

  constructor(private readonly numberGenerator: FascinatingNumberChecker) {
    this.winningNumbers = Array.from({ length: 3 }, () => this.numberGenerator.generateRandomFascinatingNumber());
    this.winnerIndex = Math.floor(Math.random() * this.winningNumbers.length);
  }

  runLottery(): void {
    console.log('Welcome to the Lottery Application!');
    console.log('Winning Numbers:', this.winningNumbers);

    let userTicket: number;
    
    // Ask the user to enter a number among the winning numbers
    do {
      const userTicketString = readlineSync.question('Enter Your Lottery Number: ');
      userTicket = parseInt(userTicketString, 10);

      if (isNaN(userTicket)) {
        console.log('Invalid input. Please enter a valid number.');
      } else if (!this.winningNumbers.includes(userTicket)) {
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
