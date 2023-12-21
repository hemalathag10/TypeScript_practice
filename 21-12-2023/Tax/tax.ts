// Importing the readline-sync library for user input
import * as readlineSync from 'readline-sync';

// Interface for Employee with tax calculation and place of service determination
interface Employee {
  calculateTax(grossSalary: number, totalSavings: number): number;
  determinePlaceOfService(age: number, sex: string, maritalStatus: string): string;
}

// Class implementing the Employee interface
class EmployeeService implements Employee {
  // Method to calculate tax based on gross salary and total savings
  calculateTax(grossSalary: number, totalSavings: number): number {
    const deductibleSavings = Math.min(totalSavings, 100000);
    const taxableIncome = grossSalary - deductibleSavings;

    let tax = 0;

    // Tax slabs
    if (taxableIncome > 100000) {
      tax += 0.1 * (Math.min(taxableIncome, 200000) - 100000); // Slab 1

      if (taxableIncome > 200000) {
        tax += 0.2 * (Math.min(taxableIncome, 500000) - 200000); // Slab 2

        if (taxableIncome > 500000) {
          tax += 0.3 * (taxableIncome - 500000); // Slab 3
        }
      }
    }

    return tax;
  }

  // Method to determine the place of service based on age, gender, and marital status
  determinePlaceOfService(age: number, gender: string, maritalStatus: string): string {
    const sex = gender.toUpperCase();
    if (sex === 'F') {
      return 'Urban areas';
    } else if (sex === 'M' && age >= 20 && age <= 40) {
      return 'Anywhere';
    } else if (sex === 'M' && age > 40 && age <= 60) {
      return 'Urban areas';
    } else {
      return 'ERROR';
    }
  }
}

// Function to prompt the user until a valid input is provided
function promptUntilValid(prompt: string, validator: (input: string) => boolean, invalidMessage: string): string {
  let userInput: string;
  do {
    userInput = readlineSync.question(prompt);
    if (!validator(userInput)) {
      console.log(`Invalid input. ${invalidMessage}`);
    }
  } while (!validator(userInput));
  return userInput;
}

// Validation functions for various inputs
function validateAge(age: string): boolean {
  const parsedAge = parseInt(age, 10);
  return !isNaN(parsedAge) && parsedAge > 0;
}

function validateGender(gender: string): boolean {
  const normalizedGender = gender.toUpperCase();
  return normalizedGender === 'M' || normalizedGender === 'F';
}

function validateMaritalStatus(status: string): boolean {
  const normalizedStatus = status.toUpperCase();
  return normalizedStatus === 'Y' || normalizedStatus === 'N';
}

function validateSalary(salary: string): boolean {
  const parsedSalary = parseFloat(salary);
  return !isNaN(parsedSalary) && parsedSalary >= 0;
}

function validateSavings(savings: string): boolean {
  const parsedSavings = parseFloat(savings);
  return !isNaN(parsedSavings) && parsedSavings >= 0;
}

// Tax Calculation and Place of Service
const employeeService = new EmployeeService();

// Get user inputs with validation
const age = promptUntilValid('Enter age: ', validateAge, 'Please enter a valid age.');
const sex = promptUntilValid('Enter sex (M or F): ', validateGender, 'Please enter either "M" or "F".');
const maritalStatus = promptUntilValid('Enter marital status (Y or N): ', validateMaritalStatus, 'Please enter either "Y" or "N".');
const grossSalary = promptUntilValid('Enter your gross salary: ', validateSalary, 'Please enter a valid salary.');
const totalSavings = promptUntilValid('Enter your total savings: ', validateSavings, 'Please enter a valid savings amount.');

// Parse user inputs to numbers
const parsedAge = parseInt(age, 10);
const parsedGrossSalary = parseFloat(grossSalary);
const parsedTotalSavings = parseFloat(totalSavings);

// Calculate tax and determine place of service
const tax = employeeService.calculateTax(parsedGrossSalary, parsedTotalSavings);
const placeOfService = employeeService.determinePlaceOfService(parsedAge, sex, maritalStatus);

// Display the results
console.log(`Tax to be paid: Rs. ${tax}`);
console.log(`Place of Service: ${placeOfService}`);
