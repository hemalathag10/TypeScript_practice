"use strict";
// Shopping cart class
class ShoppingCart {
    constructor() {
        // Private property to store the items in the cart
        this.cartItems = [];
    }
    // Method to add an item to the cart
    addItem(item) {
        var _a;
        // Ensure cartItems is an array using nullish operator
        this.cartItems = (_a = this.cartItems) !== null && _a !== void 0 ? _a : [];
        this.cartItems.push(item);
        console.log(`${item.name} added to the cart.`);
    }
    // Method to view items in the cart
    viewCart() {
        var _a;
        // Use nullish operator to check if cartItems is null or undefined
        const items = (_a = this.cartItems) !== null && _a !== void 0 ? _a : [];
        if (items.length === 0) {
            console.log("The cart is empty.");
        }
        else {
            console.log("Items in the cart:");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity}`);
            });
        }
    }
    // Method to calculate the total price of items in the cart
    calculateTotalPrice() {
        var _a;
        // Use nullish operator to check if cartItems is null or undefined
        const items = (_a = this.cartItems) !== null && _a !== void 0 ? _a : [];
        return items.reduce((total, currentItem) => {
            return currentItem.inStock ? total + currentItem.price * currentItem.quantity : total;
        }, 0);
    }
    // Method to clear the cart
    clearCart() {
        var _a;
        // Ensure cartItems is an array using nullish operator
        this.cartItems = (_a = this.cartItems) !== null && _a !== void 0 ? _a : [];
        this.cartItems = [];
        console.log("Cart cleared.");
    }
}
// Example of using the shopping cart
const shoppingCart = new ShoppingCart();
const laptop = { id: 1, name: 'Laptop', price: 1200, quantity: 2, inStock: true };
const mouse = { id: 2, name: 'Mouse', price: 20, quantity: 1, inStock: false };
// Add items to the cart
shoppingCart.addItem(laptop);
shoppingCart.addItem(mouse);
// View the cart
shoppingCart.viewCart();
// Calculate and display the total price
const totalPrice = shoppingCart.calculateTotalPrice();
console.log("Total Price:", totalPrice);
// Clear the cart
shoppingCart.clearCart();
// View the cart after clearing
shoppingCart.viewCart();
