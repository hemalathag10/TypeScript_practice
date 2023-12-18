"use strict";
class shopping_cart {
    constructor() {
        // Public property
        this.items = [];
        // Protected property
        this.discount = 0;
        // Private property
        this.shippingCost = 5;
    }
    // Public method to add items to the cart
    addItem(item) {
        this.items.push(item);
        console.log(`${item} added to the cart.`);
    }
    // Protected method to apply a discount
    applyDiscount(percent) {
        this.discount = percent;
        console.log(`Discount of ${percent}% applied.`);
    }
    // Private method to calculate the total cost
    calculateTotalCost() {
        const subtotal = this.items.length * 10;
        const discountedSubtotal = subtotal * (1 - this.discount / 100);
        const totalCost = discountedSubtotal + this.shippingCost;
        return totalCost;
    }
    // Public method to display the total cost
    displayTotalCost() {
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
