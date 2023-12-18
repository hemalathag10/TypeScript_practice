// Define interfaces for the product and cart item
interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface CartItem extends Product {
    quantity: number;
  }
  
  // Define the shopping cart class
  class ShoppingCart {
    private items: CartItem[] = [];
  
    /**
     * Adds a product to the shopping cart or updates its quantity if already present.
     * @param product - The product to add to the cart.
     * @param quantity - The quantity of the product to add.
     */
    addToCart(product: Product, quantity: number): void {
      const existingItemIndex = this.items.findIndex(item => item.id === product.id);
  
      if (existingItemIndex !== -1) {
        // Product is already in the cart, update the quantity
        this.items[existingItemIndex].quantity += quantity;
      } else {
        // Product is not in the cart, add a new cart item
        const newItem: CartItem = {
          ...product, // Spread the properties of the product
          quantity,
        };
  
        this.items.push(newItem);
      }
    }
  
    /**
     * Removes a product from the shopping cart.
     * @param productId - The ID of the product to remove from the cart.
     */
    removeFromCart(productId: number): void {
      this.items = this.items.filter(item => item.id !== productId);
    }
  
    /**
     * Gets the total price of all items in the shopping cart.
     * @returns The total price of all items in the cart.
     */
    getTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
  
  // Example usage
  const apple: Product = { id: 1, name: 'Apple', price: 1.5 };
  const banana: Product = { id: 2, name: 'Banana', price: 0.75 };
  
  const shoppingCart = new ShoppingCart();
  
  shoppingCart.addToCart(apple, 3);
  shoppingCart.addToCart(banana, 2);
  
  console.log('Items in Cart:', shoppingCart);
  
  shoppingCart.removeFromCart(1);
  
  console.log('Items in Cart after removal:', shoppingCart);
  
  const totalPrice = shoppingCart.getTotalPrice();
  console.log('Total Price:', totalPrice);
  