import * as readlineSync from 'readline-sync';

// Interface for daily sales data
interface DailySales {
  day: string;
  salesQuantity: number;
}

const dailySales: DailySales[] = [];
const numberOfDays: number = parseInt(getUserInput("Enter the number of days: "), 10);

for (let i = 0; i < numberOfDays; i++) {
  const day = `DAY${i + 1}`;
  const salesQuantity = parseInt(getUserInput(`Enter sales quantity for ${day}: `), 10);

  dailySales.push({ day, salesQuantity });
}

const maxProductPair = maximumProductPair(dailySales);
const increasingSequence = increasingSequenceLength(dailySales);

console.log("Daily Sales Data:");
console.table(dailySales);

console.log("\nMaximum product sales pair:");
console.log(`${maxProductPair[0]} and ${maxProductPair[1]} with a product of ${maxProductPair[2]}`);

console.log("\nIncreasing sales sequence:");
console.log(`Starting from ${increasingSequence[0]},  ${increasingSequence[1]} days sales is increasing.`);

function getUserInput(prompt: string): string {
  const input = readlineSync.question(prompt).trim();
  return input;
}

function maximumProductPair(salesData: DailySales[]): [string, string, number] {
  let maxProduct = 0;
  let days: [string, string] = ['', ''];

  for (let i = 0; i < salesData.length - 1; i++) {
    const currentProduct = salesData[i].salesQuantity * salesData[i + 1].salesQuantity;
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
      days = [salesData[i].day, salesData[i + 1].day];
    }
  }

  return [days[0], days[1], maxProduct];
}

function increasingSequenceLength(salesData: DailySales[]): [string, number] {
  let maxLength = 1;
  let currentLength = 1;
  let startDay = salesData[0].day;

  for (let i = 1; i < salesData.length; ++i) {
    if (salesData[i].salesQuantity > salesData[i - 1].salesQuantity) {
      currentLength++;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        startDay = salesData[i - maxLength + 2].day; // Adjusted index to start from DAY2
      }
    } else {
      currentLength = 1;
    }
  }

  return [startDay, maxLength];
}
