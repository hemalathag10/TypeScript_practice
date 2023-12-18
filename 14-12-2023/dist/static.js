"use strict";
class ShoppingCart {
    static addItem(item) {
        var _a;
        ShoppingCart.cartItems = (_a = ShoppingCart.cartItems) !== null && _a !== void 0 ? _a : [];
        ShoppingCart.cartItems.push(item);
        console.log(`${item} added to the cart.`);
    }
    static viewCart() {
        var _a;
        const items = (_a = ShoppingCart.cartItems) !== null && _a !== void 0 ? _a : [];
        if (items.length === 0) {
            console.log("The cart is empty.");
        }
        else {
            console.log("Items in the cart:");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    }
    static clearCart() {
        var _a;
        ShoppingCart.cartItems = (_a = ShoppingCart.cartItems) !== null && _a !== void 0 ? _a : [];
        ShoppingCart.cartItems = [];
        console.log("Cart cleared.");
    }
}
ShoppingCart.cartItems = [];
// Example of using the shopping cart
ShoppingCart.addItem("Product A");
ShoppingCart.addItem("Product B");
ShoppingCart.viewCart();
// Clear the cart
ShoppingCart.clearCart();
ShoppingCart.viewCart();
