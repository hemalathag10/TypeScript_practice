// employee.ts

import * as readlineSync from 'readline-sync';
import { TaxCalculator } from './taxCalculator';
import { PfCalculator } from './pfCalculator';

export interface Employee {
  name: string;
  id: number;
  role: string;
  basicSalary: number;
}

export class EmployeeManagementSystem {
  employees: Employee[] = [];
  taxCalculator: TaxCalculator = new TaxCalculator();
  pfCalculator: PfCalculator = new PfCalculator();

  isEmployeeIdUnique(id: number): boolean {
    return !this.employees.some((emp) => emp.id === id);
  }

  isEmployeeNameValid(name: string): boolean {
    return /^[a-zA-Z]+$/.test(name);
  }

  

  addEmployee(): void {
    let name: string;

    do {
      name = readlineSync.question('Enter employee name: ');

      // Validate that the name contains only alphabets
      if (!this.isEmployeeNameValid(name)) {
        console.log('Invalid name. Please enter a name containing only alphabets.');
      }

      
    } while (!this.isEmployeeNameValid(name));

    let id: number = 0; // Initialize to a default value

    do {
      const idString = readlineSync.question('Enter employee ID (numbers only): ');

      // Validate that the ID contains only numbers
      if (!/^\d+$/.test(idString)) {
        console.log('Invalid ID. Please enter numbers only.');
        continue;
      }

      id = parseInt(idString);

      // Validate uniqueness of employee ID
      if (!this.isEmployeeIdUnique(id)) {
        console.log('Employee with the same ID already exists. Please enter a unique ID.');
      }
    } while (!this.isEmployeeIdUnique(id));


 
    let role: string;

    do {
      role = readlineSync.question('Enter employee role (developer, tester, manager): ');

      // Validate that the role is in the specified list and contains only alphabets
      if (!/^[a-zA-Z]+$/.test(role) || !["developer", "tester", "manager"].includes(role.toLowerCase())) {
        console.log('Invalid role. Please enter a valid role (developer, tester, manager) containing only alphabets.');
      }

    } while (!/^[a-zA-Z]+$/.test(role) || !["developer", "tester", "manager"].includes(role.toLowerCase()));   

    const basicSalary = parseFloat(readlineSync.question('Enter employee basic salary: ') || '0');

    const employee: Employee = { name, id, role, basicSalary };
    this.employees.push(employee);

    console.log(`Employee ${name} added successfully!\n`);
  }



  displayEmployeeDetails(userId: number): void {
    const employee = this.employees.find((emp) => emp.id === userId);

    if (employee) {
      console.log('\n--- Employee Details ---');
      console.log(`Username: ${employee.name}`);
      console.log(`UserID: ${employee.id}`);
      console.log(`Role: ${employee.role}`);
      console.log(`Basic Salary: $${employee.basicSalary.toFixed(2)}`);

      const taxPercentage = this.taxCalculator.getTaxPercentage(employee.role);
      const pfPercentage = this.pfCalculator.getPFPercentage(employee.role);

      const taxAmount = (employee.basicSalary * taxPercentage) / 100;
      const pfAmount = (employee.basicSalary * pfPercentage) / 100;
      const netSalary = employee.basicSalary - taxAmount - pfAmount;

      console.log(`\n--- Salary Slip ---`);
      console.log(`Basic Salary: $${employee.basicSalary.toFixed(2)}`);
      console.log(`Tax Deduction (${taxPercentage}%): $${taxAmount.toFixed(2)}`);
      console.log(`PF Deduction (${pfPercentage}%): $${pfAmount.toFixed(2)}`);
      console.log(`Net Salary: $${netSalary.toFixed(2)}`);
    } else {
      console.log('Employee not found.');
    }
  }
}
