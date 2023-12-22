"use strict";
// employee.ts
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
exports.EmployeeManagementSystem = void 0;
const readlineSync = __importStar(require("readline-sync"));
const taxCalculator_1 = require("./taxCalculator");
const pfCalculator_1 = require("./pfCalculator");
class EmployeeManagementSystem {
    constructor() {
        this.employees = [];
        this.taxCalculator = new taxCalculator_1.TaxCalculator();
        this.pfCalculator = new pfCalculator_1.PfCalculator();
    }
    isEmployeeIdUnique(id) {
        return !this.employees.some((emp) => emp.id === id);
    }
    isEmployeeNameValid(name) {
        return /^[a-zA-Z]+$/.test(name);
    }
    addEmployee() {
        let name;
        do {
            name = readlineSync.question('Enter employee name: ');
            // Validate that the name contains only alphabets
            if (!this.isEmployeeNameValid(name)) {
                console.log('Invalid name. Please enter a name containing only alphabets.');
            }
        } while (!this.isEmployeeNameValid(name));
        let id = 0; // Initialize to a default value
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
        let role;
        do {
            role = readlineSync.question('Enter employee role (developer, tester, manager): ');
            // Validate that the role is in the specified list and contains only alphabets
            if (!/^[a-zA-Z]+$/.test(role) || !["developer", "tester", "manager"].includes(role.toLowerCase())) {
                console.log('Invalid role. Please enter a valid role (developer, tester, manager) containing only alphabets.');
            }
        } while (!/^[a-zA-Z]+$/.test(role) || !["developer", "tester", "manager"].includes(role.toLowerCase()));
        const basicSalary = parseFloat(readlineSync.question('Enter employee basic salary: ') || '0');
        const employee = { name, id, role, basicSalary };
        this.employees.push(employee);
        console.log(`Employee ${name} added successfully!\n`);
    }
    displayEmployeeDetails(userId) {
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
        }
        else {
            console.log('Employee not found.');
        }
    }
}
exports.EmployeeManagementSystem = EmployeeManagementSystem;
