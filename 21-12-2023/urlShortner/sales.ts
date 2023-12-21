import * as readlineSync from 'readline-sync';

// Interface for daily sales data
interface DailySales {
  day: string;
  salesQuantity: number;
}

// Interface for user input and validation
interface UserInputHandler {
  getUserInput(prompt: string): string;
  validateNumberInput(input: string): number | null;
}

// Class implementing UserInputHandler interface
class ConsoleUserInputHandler implements UserInputHandler {
  getUserInput(prompt: string): string {
    const input = readlineSync.question(prompt).trim();
    return input;
  }

  validateNumberInput(input: string): number | null {
    const salesQuantity = parseInt(input, 10);

    // Check if the input is a valid number
    if (isNaN(salesQuantity)) {
      console.error("Error: Please enter a valid number for sales quantity.");
      return null;
    }

    return salesQuantity;
  }
}

// Class for handling and processing sales data
class SalesDataProcessor {
  // Calculate and return the maximum product sales pair
  static maximumProductPair(salesData: DailySales[]): [string, string, number] {
    let maxProduct = 0;
    let days: [string, string] = ['', ''];

    // Iterate through the sales data to find the maximum product pair
    for (let data = 0; data < salesData.length - 1; data++) {
      const currentProduct = salesData[data].salesQuantity * salesData[data + 1].salesQuantity;
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
        days = [salesData[data].day, salesData[data + 1].day];
      }
    }

    return [days[0], days[1], maxProduct];
  }

  // Calculate and return the length and starting day of the increasing sales sequence
  static findIncreasingSalesSequence(salesData: DailySales[]): [string, number] {
    let maxLength = 1;
    let currentLength = 1;
    let startDay = salesData[0].day;

    // Iterate through the sales data to find the increasing sales sequence
    for (let i = 1; i < salesData.length; ++i) {
      if (salesData[i].salesQuantity > salesData[i - 1].salesQuantity) {
        currentLength++;
        if (currentLength > maxLength) {
          maxLength = currentLength;
          startDay = salesData[i - maxLength + 1].day;
        }
      } else {
        currentLength = 1;
      }
    }

    return [startDay, maxLength];
  }
}

// Class for orchestrating the entire application
class SalesDataApplication {
  private readonly dailySales: DailySales[] = [];

  constructor(private readonly userInputHandler: UserInputHandler) {}

  // Run the application
  runApplication(): void {
    const numberOfDays: number = parseInt(this.userInputHandler.getUserInput("Enter the number of days: "), 10);

    // Loop to input daily sales data
    for (let Day = 0; Day < numberOfDays; Day++) {
      const day = `DAY${Day + 1}`;
      let salesQuantity: number | null = null;

      // Keep prompting for sales quantity until a valid number is entered
      while (salesQuantity === null) {
        const salesQuantityString = this.userInputHandler.getUserInput(`Enter sales quantity for ${day}: `);

        // Validate sales input
        salesQuantity = this.userInputHandler.validateNumberInput(salesQuantityString);
      }

      // Store the daily sales data
      this.dailySales.push({ day, salesQuantity });
    }

    // Calculate and display the maximum product sales pair
    const maxProductPair = SalesDataProcessor.maximumProductPair(this.dailySales);

    // Calculate and display the increasing sales sequence
    const increasingSequence = SalesDataProcessor.findIncreasingSalesSequence(this.dailySales);

    // Display the daily sales data
    console.log("Daily Sales Data:");
    console.table(this.dailySales);

    // Display the maximum product sales pair
    console.log("\nMaximum product sales pair:");
    console.log(`${maxProductPair[0]} and ${maxProductPair[1]} with a product of ${maxProductPair[2]}`);

    // Display the increasing sales sequence
    console.log("\nIncreasing sales sequence:");
    console.log(`Starting from ${increasingSequence[0]}, ${increasingSequence[1]} days sales is increasing.`);
  }
}

// Create instances of classes
const userInputHandler = new ConsoleUserInputHandler();
const salesDataApp = new SalesDataApplication(userInputHandler);

// Run the application
salesDataApp.runApplication();
