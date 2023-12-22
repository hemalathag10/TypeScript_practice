// taxCalculator.ts

export class TaxCalculator {
    getTaxPercentage(role: string): number {
      switch (role.toLowerCase()) {
        case 'developer':
          return 12;
        case 'tester':
          return 10;
        case 'manager':
          return 15;
        default:
          return 10; // Default percentage for  roles
      }
    }
  }
  