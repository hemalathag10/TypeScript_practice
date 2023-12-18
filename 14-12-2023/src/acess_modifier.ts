class shopping_cart {
  // Public property
  public items: string[] = [];

  // Protected property
  protected discount: number = 0;

  // Private property
  private readonly shippingCost: number = 5;

  // Public method to add items to the cart
  public addItem(item: string): void {
    this.items.push(item);
    console.log(`${item} added to the cart.`);
  }

  // Protected method to apply a discount
  protected applyDiscount(percent: number): void {
    this.discount = percent;
    console.log(`Discount of ${percent}% applied.`);
  }

  // Private method to calculate the total cost
  private calculateTotalCost(): number {
    const subtotal = this.items.length * 10;
    const discountedSubtotal = subtotal * (1 - this.discount / 100);
    const totalCost = discountedSubtotal + this.shippingCost;
    return totalCost;
  }

  // Public method to display the total cost
  public displayTotalCost(): void {
    const totalCost = this.calculateTotalCost();
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);
  }
}

// Example usage of the shopping_cart class
const cart = new shopping_cart();

// Public property is accessible from outside the class
cart.addItem('Item 1');
cart.addItem('Item 2');

// The following line would result in a TypeScript compilation error due to protected access
// cart.discount = 10;

// The following line would result in a TypeScript compilation error due to private access
// console.log(cart.shippingCost);

// Public method is accessible from outside the class
cart.displayTotalCost();

// The following line would result in a TypeScript compilation error due to protected access
// cart.applyDiscount(15);
