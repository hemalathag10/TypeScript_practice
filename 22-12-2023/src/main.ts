
import * as readlineSync from 'readline-sync';
import { Employee, EmployeeManagementSystem } from './employee';

console.log('Welcome to the Payroll Management System!');

const employeeManagementSystem = new EmployeeManagementSystem();

while (true) {
  const userType = readlineSync.keyInSelect(['Admin', 'Employee', 'Exit'], 'Are you an Admin or an Employee?');

  if (userType === 0) {
    // Admin
    const numberOfEmployees = parseInt(readlineSync.question('Enter the number of employees: ') || '0');

    for (let i = 0; i < numberOfEmployees; i++) {
      console.log(`\nEnter details for Employee ${i + 1}:`);
      employeeManagementSystem.addEmployee();
    }
  } else if (userType === 1) {
    // Employee
    const userId = parseInt(readlineSync.question('Enter your employee ID: ') || '0');
    employeeManagementSystem.displayEmployeeDetails(userId);
  } else if (userType === 2) {
    // Exit
    console.log('Exiting...');
    break;
  }
}
