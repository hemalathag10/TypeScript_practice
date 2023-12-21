import * as readlineSync from 'readline-sync';

// Define an interface for a FlourBag
interface FlourBag {
  count: number;
  price: number;
  weight: number;
}

// Define an interface for a FlourPackagingStrategy
interface FlourPackagingStrategy {
  canPack(bags: FlourBag[], goal: number): boolean;
  calculateCost(bags: FlourBag[]): number;
}

// Implement the FlourPackagingStrategy interface
class DefaultFlourPackagingStrategy implements FlourPackagingStrategy {
  canPack(bags: FlourBag[], goal: number): boolean {
    const totalWeight = bags.reduce((acc, bag) => acc + bag.count * bag.weight, 0);
    return totalWeight >= goal && goal % bags[bags.length - 1].weight <= bags[0].count;
  }

  

  calculateCost(bags: FlourBag[]): number {
    return bags.reduce((acc, bag) => acc + bag.count * bag.price, 0);
  }
}

// Implement the FlourBag class
class Bag implements FlourBag {
  constructor(public count: number, public price: number, public weight: number) {}
}

// Implement the Bakery class
class Bakery {
  private flourInventory: FlourBag[] = [];

  constructor(private packagingStrategy: FlourPackagingStrategy) {}

  addFlourBag(bag: FlourBag): void {
    this.flourInventory.push(bag);
  }

  displayReceipt(totalCost: number): void {
    console.log('\nReceipt:');
    this.flourInventory.forEach(bag => {
      console.log(`${bag.count} Bags (${bag.weight} kilos each): $${bag.count * bag.price}`);
    });
    console.log(`Total Cost: $${totalCost}`);
  }

  runBakeryApplication(): void {
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
    } else {
      console.log(`Sorry, you cannot pack the flour.`);
    }
  }
}

// Initialize the bakery with flour inventory and packaging strategy
const bakery = new Bakery(new DefaultFlourPackagingStrategy());

// Run the bakery application
bakery.runBakeryApplication();
