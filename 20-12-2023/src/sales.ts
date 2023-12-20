import * as readlineSync from 'readline-sync';

// Interface for daily sales data
interface DailySales {
  day: string;
  salesQuantity: number;
}

// Array to store daily sales data
const dailySales: DailySales[] = [];

// Get the number of days from the user
const numberOfDays: number = parseInt(getUserInput("Enter the number of days: "), 10);

// Loop to input daily sales data
for (let Day = 0; Day < numberOfDays; Day++) {
  const day = `DAY${Day + 1}`;
  let salesQuantity: number | null = null;

  // Keep prompting for sales quantity until a valid number is entered
  while (salesQuantity === null) {
    const salesQuantityString = getUserInput(`Enter sales quantity for ${day}: `);

    // Validate sales input
    salesQuantity = validateNumberInput(salesQuantityString);
  }

  // Store the daily sales data
  dailySales.push({ day, salesQuantity });
}

// Calculate and display the maximum product sales pair
const maxProductPair = maximumProductPair(dailySales);

// Calculate and display the increasing sales sequence
const increasingSequence = findIncreasingSalesSequence(dailySales);

// Display the daily sales data
console.log("Daily Sales Data:");
console.table(dailySales);

// Display the maximum product sales pair
console.log("\nMaximum product sales pair:");
console.log(`${maxProductPair[0]} and ${maxProductPair[1]} with a product of ${maxProductPair[2]}`);

// Display the increasing sales sequence
console.log("\nIncreasing sales sequence:");
console.log(`Starting from ${increasingSequence[0]}, ${increasingSequence[1]} days sales is increasing.`);

// Function to get user input with a prompt
function getUserInput(prompt: string): string {
  const input = readlineSync.question(prompt).trim();
  return input;
}

// Function to validate and parse user input as a number
function validateNumberInput(input: string): number | null {
  const salesQuantity = parseInt(input, 10);

  // Check if the input is a valid number
  if (isNaN(salesQuantity)) {
    console.error("Error: Please enter a valid number for sales quantity.");
    return null;
  }

  return salesQuantity;
}

// Function to find the maximum product sales pair
function maximumProductPair(salesData: DailySales[]): [string, string, number] {
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

// Function to find the length of the increasing sales sequence
function findIncreasingSalesSequence(salesData: DailySales[]): [string, number] {
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
