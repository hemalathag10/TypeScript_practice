"use strict";
// taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCalculator = void 0;
class TaxCalculator {
    getTaxPercentage(role) {
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
exports.TaxCalculator = TaxCalculator;
