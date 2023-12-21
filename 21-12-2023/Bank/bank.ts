// Importing the readline-sync library for user input
import * as readlineSync from 'readline-sync';

// Interface for a bank object
interface Bank {
  name: string;
  accountNumber: string;
  balance: number;
}

// Interface for a customer with banking operations
interface Customer {
  deposit(bank: Bank, amount: number): void;
  withdraw(accountNumber: string, amount: number): void;
  checkBalance(accountNumber: string): void;
  isValidAccountNumber(accountNumber: string): boolean;
  isValidBankName(bankName: string): boolean;
}

// Class implementing the Customer interface
class BankCustomer implements Customer {
  // Map to store banks using account numbers as keys
  protected banks: Map<string, Bank> = new Map();

  // Method to check if an account number is valid (11 digits)
  isValidAccountNumber(accountNumber: string): boolean {
    return /^\d{11}$/.test(accountNumber);
  }

  // Method to check if a bank name is valid (only letters and spaces)
  isValidBankName(bankName: string): boolean {
    return /^[a-zA-Z\s]+$/.test(bankName);
  }

  // Method to deposit money into a bank
  deposit(bank: Bank, amount: number): void {
    // Check if the account number and bank name are valid
    if (!this.isValidAccountNumber(bank.accountNumber) || !this.isValidBankName(bank.name)) {
      console.log('Invalid account number or bank name.');
      return;
    }

    // Check if the bank already exists in the map
    const existingBank = this.banks.get(bank.accountNumber);

    // Update the balance or create a new bank entry
    if (existingBank) {
      existingBank.balance += amount;
    } else {
      const newBank: Bank = { ...bank, balance: amount };
      this.banks.set(bank.accountNumber, newBank);
    }

    console.log(`Deposited $${amount} to ${bank.name}`);
  }

  // Method to withdraw money from a bank
  withdraw(accountNumber: string, amount: number): void {
    // Check if the account number is valid
    if (!this.isValidAccountNumber(accountNumber)) {
      console.log('Invalid account number.');
      return;
    }

    // Check if the bank exists in the map
    const existingBank = this.banks.get(accountNumber);

    // Withdraw money if sufficient funds are available
    if (existingBank) {
      if (existingBank.balance >= amount) {
        existingBank.balance -= amount;
        console.log(`Withdrawn $${amount} from ${existingBank.name}`);
      } else {
        console.log(`Insufficient funds in ${existingBank.name} for withdrawal.`);
      }
    } else {
      console.log(`Bank with account number ${accountNumber} not found.`);
    }
  }

  // Method to check the balance of a bank account
  checkBalance(accountNumber: string): void {
    // Check if the account number is valid
    if (!this.isValidAccountNumber(accountNumber)) {
      console.log('Invalid account number.');
      return;
    }

    // Check if the bank exists in the map and display the balance
    const existingBank = this.banks.get(accountNumber);

    if (existingBank) {
      console.log(`Balance in ${existingBank.name}: $${existingBank.balance}`);
    } else {
      console.log(`Bank with account number ${accountNumber} not found.`);
    }
  }
}

// Application logic
const bankCustomer = new BankCustomer();

while (true) {
  // Get user input for account number
  let accountNumber = readlineSync.question('Enter your account number (11 digits): ');

  // Validate account number format
  while (!bankCustomer.isValidAccountNumber(accountNumber)) {
    console.log('Invalid account number. Please enter a valid 11-digit account number.');
    accountNumber = readlineSync.question('Enter your account number (11 digits): ');
  }

  // Get user input for operation (deposit, withdraw, check, stop)
  const operation = readlineSync.question('Choose operation (deposit, withdraw, check, stop): ');

  // Exit the loop if the user chooses to stop
  if (operation === 'stop') {
    break;
  }

  // Perform the selected operation
  if (operation === 'deposit' || operation === 'withdraw') {
    // Get user input for bank name
    let bankName = readlineSync.question('Enter the name of your bank: ');

    // Validate bank name format
    while (!bankCustomer.isValidBankName(bankName)) {
      console.log('Invalid bank name. Please enter a valid name containing only letters and spaces.');
      bankName = readlineSync.question('Enter the name of your bank: ');
    }

    // Get user input for transaction amount
    const amount = parseFloat(readlineSync.question(`Enter the ${operation} amount: `));

    // Create a bank object with user-provided information
    const bank: Bank = { name: bankName, accountNumber, balance: 0 };

    // Perform deposit or withdrawal based on the selected operation
    if (operation === 'deposit') {
      bankCustomer.deposit(bank, amount);
    } else {
      bankCustomer.withdraw(accountNumber, amount);
    }
  } else if (operation === 'check') {
    // Check and display the balance for the selected account
    bankCustomer.checkBalance(accountNumber);
  } else {
    console.log('Invalid operation.');
  }
}
