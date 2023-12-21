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
// Implement the FlourPackagingStrategy interface
class DefaultFlourPackagingStrategy {
    canPack(bags, goal) {
        const totalWeight = bags.reduce((acc, bag) => acc + bag.count * bag.weight, 0);
        return totalWeight >= goal && goal % bags[bags.length - 1].weight <= bags[0].count;
    }
    calculateCost(bags) {
        return bags.reduce((acc, bag) => acc + bag.count * bag.price, 0);
    }
}
// Implement the FlourBag class
class Bag {
    constructor(count, price, weight) {
        this.count = count;
        this.price = price;
        this.weight = weight;
    }
}
// Implement the Bakery class
class Bakery {
    constructor(packagingStrategy) {
        this.packagingStrategy = packagingStrategy;
        this.flourInventory = [];
    }
    addFlourBag(bag) {
        this.flourInventory.push(bag);
    }
    displayReceipt(totalCost) {
        console.log('\nReceipt:');
        this.flourInventory.forEach(bag => {
            console.log(`${bag.count} Bags (${bag.weight} kilos each): $${bag.count * bag.price}`);
        });
        console.log(`Total Cost: $${totalCost}`);
    }
    runBakeryApplication() {
        console.log('Welcome to the Bakery Application!');
        const bigBag = new Bag(parseInt(readlineSync.question('Enter the count of big flour bags (5 kilos each):'), 10), 10, 5);
        const smallBag = new Bag(parseInt(readlineSync.question('Enter the count of small flour bags (1 kilo each):'), 10), 2, 1);
        const goal = parseInt(readlineSync.question('Enter the goal amount of kilos needed to assemble a package:'), 10);
        if (isNaN(bigBag.count) || isNaN(smallBag.count) || isNaN(goal)) {
            console.log('Invalid input. Please enter valid numbers.');
            return;
        }
        this.addFlourBag(bigBag);
        this.addFlourBag(smallBag);
        const canPackage = this.packagingStrategy.canPack(this.flourInventory, goal);
        if (canPackage) {
            const totalCost = this.packagingStrategy.calculateCost(this.flourInventory);
            console.log(`You can pack the flour!`);
            this.displayReceipt(totalCost);
        }
        else {
            console.log(`Sorry, you cannot pack the flour.`);
        }
    }
}
// Initialize the bakery with flour inventory and packaging strategy
const bakery = new Bakery(new DefaultFlourPackagingStrategy());
// Run the bakery application
bakery.runBakeryApplication();
