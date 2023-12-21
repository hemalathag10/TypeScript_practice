import * as readlineSync from 'readline-sync';

// Define an interface for a FlourBag
interface FlourBag {
  count: number;
  price: number;
  weight: number;
  name: string; 
}

// Define an interface for a FlourPackagingStrategy
interface FlourPackagingStrategy {
  canPack(bags: FlourBag[], goal: number): boolean;
  calculateCost(bags: FlourBag[], usedBags: FlourBag[]): number;
}

// Implement the FlourPackagingStrategy interface
class DefaultFlourPackagingStrategy implements FlourPackagingStrategy {
  canPack(bags: FlourBag[], goal: number): boolean {
    const totalWeight = bags.reduce((acc, bag) => acc + bag.count * bag.weight, 0);
    return totalWeight >= goal && goal % bags[bags.length - 1].weight <= bags[0].count;
  }

  calculateCost(bags: FlourBag[], usedBags: FlourBag[]): number {
    return usedBags.reduce((acc, bag) => acc + bag.count * bag.price, 0);
  }
}

// Implement the FlourBag class
class Bag implements FlourBag {
  constructor(public count: number, public price: number, public weight: number, public name: string) {}
}

// Implement the Bakery class
class Bakery {
  private flourInventory: FlourBag[] = [];

  constructor(private packagingStrategy: FlourPackagingStrategy) {}

  addFlourBag(bag: FlourBag): void {
    this.flourInventory.push(bag);
  }

  displayReceipt(totalCost: number, usedBags: FlourBag[]): void {
    console.log('\nReceipt:');
    usedBags.forEach(bag => {
      console.log(`${bag.name} - $${bag.price} per bag: $${bag.count * bag.price}`);
    });
    console.log(`Total Cost: $${totalCost}`);
  }

  runBakeryApplication(): void {
    console.log('Welcome to the Bakery Application!');

    const bigBagCount = this.promptForPositiveInteger('Enter the count of big flour bags (5 kilos each):');
    const smallBagCount = this.promptForPositiveInteger('Enter the count of small flour bags (1 kilo each):');
    const goal = this.promptForPositiveInteger('Enter the goal amount of kilos needed to assemble a package:');

    const bigBag = new Bag(bigBagCount, 10, 5, 'Large Bag');
    const smallBag = new Bag(smallBagCount, 2, 1, 'Small Bag');

    this.addFlourBag(bigBag);
    this.addFlourBag(smallBag);

    const canPackage = this.packagingStrategy.canPack(this.flourInventory, goal);

    if (canPackage) {
      const usedBags = this.getUsedBags(this.flourInventory, goal);
      const totalCost = this.packagingStrategy.calculateCost(this.flourInventory, usedBags);

      console.log(`You can pack the flour!`);

      this.displayReceipt(totalCost, usedBags);
    } else {
      console.log(`Sorry, you cannot pack the flour.`);
    }
  }

  //Total cost for only used bags 
  private getUsedBags(bags: FlourBag[], goal: number): FlourBag[] {
    const sortedBags = bags.sort((a, b) => a.weight - b.weight);
    const usedBags: FlourBag[] = [];

    for (const bag of sortedBags) {
      const bagsNeeded = Math.min(Math.floor(goal / bag.weight), bag.count);
      if (bagsNeeded > 0) {
        usedBags.push(new Bag(bagsNeeded, bag.price, bag.weight, bag.name));
        goal -= bagsNeeded * bag.weight;
      }
    }

    return usedBags;
  }

  private promptForPositiveInteger(message: string): number {
    let input: number;
    do {
      input = parseInt(readlineSync.question(message), 10);
      if (isNaN(input) || input <= 0) {
        console.log('Invalid input. Please enter a valid positive number.');
      }
    } while (isNaN(input) || input <= 0);
    return input;
  }
}

// Initialize the bakery with flour inventory and packaging strategy
const bakery = new Bakery(new DefaultFlourPackagingStrategy());

// Run the bakery application
bakery.runBakeryApplication();
