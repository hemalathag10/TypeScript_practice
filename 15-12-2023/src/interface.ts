
// Interface for a shopping cart item
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    inStock: boolean;
}

// Shopping cart class
class ShoppingCart {
    // Private property to store the items in the cart
    private cartItems: CartItem[] = [];

    // Method to add an item to the cart
    addItem(item: CartItem): void {
        // Ensure cartItems is an array using nullish operator
        this.cartItems = this.cartItems ?? [];
        this.cartItems.push(item);
        console.log(`${item.name} added to the cart.`);
    }

    // Method to view items in the cart
    viewCart(): void {
        // Use nullish operator to check if cartItems is null or undefined
        const items = this.cartItems ?? [];
        if (items.length === 0) {
            console.log("The cart is empty.");
        } else {
            console.log("Items in the cart:");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity}`);
            });
        }
    }

    // Method to calculate the total price of items in the cart
    calculateTotalPrice(): number {
        // Use nullish operator to check if cartItems is null or undefined
        const items = this.cartItems ?? [];
        return items.reduce((total, currentItem) => {
            return currentItem.inStock ? total + currentItem.price * currentItem.quantity : total;
        }, 0);
    }

    // Method to clear the cart
    clearCart(): void {
        // Ensure cartItems is an array using nullish operator
        this.cartItems = this.cartItems ?? [];
        this.cartItems = [];
        console.log("Cart cleared.");
    }
}

// Example of using the shopping cart
const shoppingCart = new ShoppingCart();

const laptop: CartItem = { id: 1, name: 'Laptop', price: 1200, quantity: 2, inStock: true };
const mouse: CartItem = { id: 2, name: 'Mouse', price: 20, quantity: 1, inStock: false };

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
