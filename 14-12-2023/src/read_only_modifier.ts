// Define a class representing a shopping cart
class ShoppingCart {
    private items: string[] = [];
  
    /**
     * Add items to the shopping cart.
     * @param {...string} products - Products to be added to the cart.
     */
    addItems(...products: string[]): void {
      // Use nullish coalescing to ensure a non-null/undefined array
      this.items = this.items ?? [];
  
      // Add the provided products to the cart
      this.items.push(...products);
  
      // Display a message about the added items
      const itemCount = products.length;
      console.log(`${itemCount} ${itemCount === 1 ? 'item' : 'items'} added to the cart.`);
    }
  
    /**
     * Display the contents of the shopping cart.
     */
    displayCart(): void {
      // Use nullish coalescing to ensure a non-null/undefined array
      const cartContents = this.items ?? [];
  
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
  