"use strict";
class ShoppingCart {
    constructor() {
        // Private property
        this.items = [];
        // Private properties
        this._discount = 0;
        this.shippingCost = 5;
    }
    static viewCart() {
        throw new Error("Method not implemented.");
    }
    static addItem(arg0) {
        throw new Error("Method not implemented.");
    }
    // Getter for discount
    get discount() {
        return this._discount;
    }
    // Setter for discount with additional logic
    set discount(newDiscount) {
        if (newDiscount >= 0 && newDiscount <= 50) {
            this._discount = newDiscount;
            console.log(`Discount set to ${newDiscount}%.`);
        }
        else {
            console.error('Invalid discount value. Discount should be between 0 and 50.');
        }
    }
    // Private method to calculate the total cost
    calculateTotalCost() {
        const subtotal = this.items.length * 10;
        const discountedSubtotal = subtotal * (1 - this._discount / 100);
        const totalCost = discountedSubtotal + this.shippingCost;
        return totalCost;
    }
    // Public method to display the total cost
    displayTotalCost() {
        const totalCost = this.calculateTotalCost();
        console.log(`Total Cost: $${totalCost.toFixed(2)}`);
    }
    // Public method to add items to the cart
    addItem(item) {
        this.items.push(item);
        console.log(`${item} added to the cart.`);
    }
}
// Example usage of the ShoppingCart class
const cart = new ShoppingCart();
// Using getter and setter for discount
console.log(`Current Discount: ${cart.discount}%`); // Outputs: Current Discount: 0%
cart.discount = 10; // Sets the discount using the setter method
console.log(`Updated Discount: ${cart.discount}%`); // Outputs: Updated Discount: 10%
// The following line would result in an error due to the setter logic
cart.discount = 60; // Outputs: Invalid discount value. Discount should be between 0 and 50%.
// Displaying total cost
cart.addItem('Item 1');
cart.displayTotalCost();
