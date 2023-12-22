"use strict";
// pfCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfCalculator = void 0;
class PfCalculator {
    getPFPercentage(role) {
        switch (role.toLowerCase()) {
            case 'developer':
                return 7;
            case 'tester':
                return 5;
            case 'manager':
                return 8;
            default:
                return 5; // Default percentage for unknown roles
        }
    }
}
exports.PfCalculator = PfCalculator;
