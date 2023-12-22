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
const employee_1 = require("./employee");
console.log('Welcome to the Payroll Management System!');
const employeeManagementSystem = new employee_1.EmployeeManagementSystem();
while (true) {
    const userType = readlineSync.keyInSelect(['Admin', 'Employee', 'Exit'], 'Are you an Admin or an Employee?');
    if (userType === 0) {
        // Admin
        const numberOfEmployees = parseInt(readlineSync.question('Enter the number of employees: ') || '0');
        for (let i = 0; i < numberOfEmployees; i++) {
            console.log(`\nEnter details for Employee ${i + 1}:`);
            employeeManagementSystem.addEmployee();
        }
    }
    else if (userType === 1) {
        // Employee
        const userId = parseInt(readlineSync.question('Enter your employee ID: ') || '0');
        employeeManagementSystem.displayEmployeeDetails(userId);
    }
    else if (userType === 2) {
        // Exit
        console.log('Exiting...');
        break;
    }
}
