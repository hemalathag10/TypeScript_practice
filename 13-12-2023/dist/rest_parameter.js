"use strict";
// Define a class representing a shopping cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    /**
     * Add items to the shopping cart.
     * @param {...string} products - Products to be added to the cart.
     */
    addItems(...products) {
        var _a;
        // Use nullish coalescing to ensure a non-null/undefined array
        this.items = (_a = this.items) !== null && _a !== void 0 ? _a : [];
        // Add the provided products to the cart
        this.items.push(...products);
        // Display a message about the added items
        const itemCount = products.length;
        console.log(`${itemCount} ${itemCount === 1 ? 'item' : 'items'} added to the cart.`);
    }
    /**
     * Display the contents of the shopping cart.
     */
    displayCart() {
        var _a;
        // Use nullish coalescing to ensure a non-null/undefined array
        const cartContents = (_a = this.items) !== null && _a !== void 0 ? _a : [];
        // Display the contents of the cart
        console.log('Shopping Cart Contents:');
        cartContents.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
// Example usage of the ShoppingCart class
const shoppingCart = new ShoppingCart();
// Adding items to the cart using rest parameters
shoppingCart.addItems('Product A', 'Product B', 'Product C');
shoppingCart.addItems('Product D', 'Product E');
// Displaying the contents of the cart
shoppingCart.displayCart();
