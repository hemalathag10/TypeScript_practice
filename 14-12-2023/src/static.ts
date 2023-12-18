class ShoppingCart {
    private static cartItems: string[] = [];
  
    static addItem(item: string): void {
      ShoppingCart.cartItems = ShoppingCart.cartItems ?? [];
      ShoppingCart.cartItems.push(item);
      console.log(`${item} added to the cart.`);
    }
  
    static viewCart(): void {
      const items = ShoppingCart.cartItems ?? [];
      if (items.length === 0) {
        console.log("The cart is empty.");
      } else {
        console.log("Items in the cart:");
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      }
    }
  
    static clearCart(): void {
      ShoppingCart.cartItems = ShoppingCart.cartItems ?? [];
      ShoppingCart.cartItems = [];
      console.log("Cart cleared.");
    }
  }
  
  // Example of using the shopping cart
  ShoppingCart.addItem("Product A");
  ShoppingCart.addItem("Product B");
  ShoppingCart.viewCart();
  
  // Clear the cart
  ShoppingCart.clearCart();
  ShoppingCart.viewCart();
  