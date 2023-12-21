import * as readlineSync from 'readline-sync';

interface Bank {
  name: string;
  accountNumber: string;
  balance: number;
}

interface Customer {
  deposit(bank: Bank, amount: number): void;
  withdraw(accountNumber: string, amount: number): void;
  checkBalance(accountNumber: string): void;
  isValidAccountNumber(accountNumber: string): boolean;
  isValidBankName(bankName: string): boolean;
}

class BankCustomer implements Customer {
  protected banks: Map<string, Bank> = new Map();

  isValidAccountNumber(accountNumber: string): boolean {
    return /^\d{11}$/.test(accountNumber);
  }

  isValidBankName(bankName: string): boolean {
    return /^[a-zA-Z\s]+$/.test(bankName);
  }

  deposit(bank: Bank, amount: number): void {
    if (!this.isValidAccountNumber(bank.accountNumber) || !this.isValidBankName(bank.name)) {
      console.log('Invalid account number or bank name.');
      return;
    }

    const existingBank = this.banks.get(bank.accountNumber);

    if (existingBank) {
      existingBank.balance += amount;
    } else {
      const newBank: Bank = { ...bank, balance: amount };
      this.banks.set(bank.accountNumber, newBank);
    }

    console.log(`Deposited $${amount} to ${bank.name}`);
  }

  withdraw(accountNumber: string, amount: number): void {
    if (!this.isValidAccountNumber(accountNumber)) {
      console.log('Invalid account number.');
      return;
    }

    const existingBank = this.banks.get(accountNumber);

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

  checkBalance(accountNumber: string): void {
    if (!this.isValidAccountNumber(accountNumber)) {
      console.log('Invalid account number.');
      return;
    }

    const existingBank = this.banks.get(accountNumber);

    if (existingBank) {
      console.log(`Balance in ${existingBank.name}: $${existingBank.balance}`);
    } else {
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
    const bank: Bank = { name: bankName, accountNumber, balance: 0 };

    if (operation === 'deposit') {
      bankCustomer.deposit(bank, amount);
    } else {
      bankCustomer.withdraw(accountNumber, amount);
    }
  } else if (operation === 'check') {
    bankCustomer.checkBalance(accountNumber);
  } else {
    console.log('Invalid operation.');
  }
}
