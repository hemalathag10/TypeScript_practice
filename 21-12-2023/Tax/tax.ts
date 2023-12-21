import * as readlineSync from 'readline-sync';

interface Employee {
  calculateTax(grossSalary: number, totalSavings: number): number;
  determinePlaceOfService(age: number, sex: string, maritalStatus: string): string;
}

class EmployeeService implements Employee {
  calculateTax(grossSalary: number, totalSavings: number): number {
    const deductibleSavings = Math.min(totalSavings, 100000);
    const taxableIncome = grossSalary - deductibleSavings;

    let tax = 0;

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

  determinePlaceOfService(age: number, sex: string, maritalStatus: string): string {
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

// Application 2 with Tax Calculation and Place of Service
const employeeService = new EmployeeService();

const age = parseInt(readlineSync.question('Enter age: '), 10);
const sex = readlineSync.question('Enter sex (M or F): ');
const maritalStatus = readlineSync.question('Enter marital status (Y or N): ');
const grossSalary = parseFloat(readlineSync.question('Enter your gross salary: '));
const totalSavings = parseFloat(readlineSync.question('Enter your total savings: '));

const tax = employeeService.calculateTax(grossSalary, totalSavings);
const placeOfService = employeeService.determinePlaceOfService(age, sex, maritalStatus);

console.log(`Tax to be paid: Rs. ${tax}`);
console.log(`Place of Service: ${placeOfService}`);
