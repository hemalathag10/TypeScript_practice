// Product class representing individual products
class Product {
  constructor(public name: string, public price: number) {}
}

// ShoppingCart class for handling shopping cart operations
class ShoppingCart {
  private items: { product: Product; quantity: number }[] = [];

  // Add a product to the cart
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find((item) => item.product === product);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }

    console.log(`${quantity} ${product.name}(s) added to the cart.`);
  }

  // Calculate the total cost of items in the cart
  calculateTotalCost(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // Display the items in the cart
  displayCart(): void {
    console.log('Shopping Cart Contents:');
    this.items.forEach((item) => {
      console.log(`${item.product.name} x ${item.quantity}`);
    });
    console.log(`Total Cost: $${this.calculateTotalCost().toFixed(2)}`);
  }
}

// DiscountedShoppingCart class that extends ShoppingCart
class DiscountedShoppingCart extends ShoppingCart {
  private additionalDiscount: number = 0;

  // Apply an extra discount for special items
  applyExtraDiscountForSpecialItems(specialItem: Product, discountPercentage: number): void {
    const specialItemInCart = this.items.find((item) => item.product === specialItem);

    if (specialItemInCart) {
      this.additionalDiscount += discountPercentage;
      console.log(`Extra ${discountPercentage}% discount applied for ${specialItem.name}.`);
    } else {
      console.log(`${specialItem.name} not found in the cart.`);
    }
  }

  // Override the displayCart method to include additional discount information
  displayCart(): void {
    super.displayCart();
    console.log(`Additional Discount: ${this.additionalDiscount}%`);
  }
}

// Example usage of the e-commerce application
const laptop = new Product('Laptop', 800);
const phone = new Product('Smartphone', 500);

const regularCart = new ShoppingCart();
regularCart.addToCart(laptop, 2);
regularCart.addToCart(phone, 1);
regularCart.displayCart();

console.log('\n');

const discountedCart = new DiscountedShoppingCart();
discountedCart.addToCart(laptop, 1);
discountedCart.addToCart(phone, 1);
discountedCart.applyExtraDiscountForSpecialItems(laptop, 10);
discountedCart.displayCart();
