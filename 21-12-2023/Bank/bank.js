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
class BankCustomer {
    constructor() {
        this.banks = new Map();
    }
    isValidAccountNumber(accountNumber) {
        return /^\d{11}$/.test(accountNumber);
    }
    isValidBankName(bankName) {
        return /^[a-zA-Z\s]+$/.test(bankName);
    }
    deposit(bank, amount) {
        if (!this.isValidAccountNumber(bank.accountNumber) || !this.isValidBankName(bank.name)) {
            console.log('Invalid account number or bank name.');
            return;
        }
        const existingBank = this.banks.get(bank.accountNumber);
        if (existingBank) {
            existingBank.balance += amount;
        }
        else {
            const newBank = Object.assign(Object.assign({}, bank), { balance: amount });
            this.banks.set(bank.accountNumber, newBank);
        }
        console.log(`Deposited $${amount} to ${bank.name}`);
    }
    withdraw(accountNumber, amount) {
        if (!this.isValidAccountNumber(accountNumber)) {
            console.log('Invalid account number.');
            return;
        }
        const existingBank = this.banks.get(accountNumber);
        if (existingBank) {
            if (existingBank.balance >= amount) {
                existingBank.balance -= amount;
                console.log(`Withdrawn $${amount} from ${existingBank.name}`);
            }
            else {
                console.log(`Insufficient funds in ${existingBank.name} for withdrawal.`);
            }
        }
        else {
            console.log(`Bank with account number ${accountNumber} not found.`);
        }
    }
    checkBalance(accountNumber) {
        if (!this.isValidAccountNumber(accountNumber)) {
            console.log('Invalid account number.');
            return;
        }
        const existingBank = this.banks.get(accountNumber);
        if (existingBank) {
            console.log(`Balance in ${existingBank.name}: $${existingBank.balance}`);
        }
        else {
            console.log(`Bank with account number ${accountNumber} not found.`);
        }
    }
}
// Application 1
const bankCustomer = new BankCustomer();
while (true) {
    let accountNumber = readlineSync.question('Enter your account number (11 digits): ');
    while (!bankCustomer.isValidAccountNumber(accountNumber)) {
        console.log('Invalid account number. Please enter a valid 11-digit account number.');
        accountNumber = readlineSync.question('Enter your account number (11 digits): ');
    }
    const operation = readlineSync.question('Choose operation (deposit, withdraw, check, stop): ');
    if (operation === 'stop') {
        break;
    }
    if (operation === 'deposit' || operation === 'withdraw') {
        let bankName = readlineSync.question('Enter the name of your bank: ');
        while (!bankCustomer.isValidBankName(bankName)) {
            console.log('Invalid bank name. Please enter a valid name containing only letters and spaces.');
            bankName = readlineSync.question('Enter the name of your bank: ');
        }
        const amount = parseFloat(readlineSync.question(`Enter the ${operation} amount: `));
        const bank = { name: bankName, accountNumber, balance: 0 };
        if (operation === 'deposit') {
            bankCustomer.deposit(bank, amount);
        }
        else {
            bankCustomer.withdraw(accountNumber, amount);
        }
    }
    else if (operation === 'check') {
        bankCustomer.checkBalance(accountNumber);
    }
    else {
        console.log('Invalid operation.');
    }
}
