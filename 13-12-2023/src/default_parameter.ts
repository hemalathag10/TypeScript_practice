// Define a class representing a product
class Product {
    private readonly name: string;
    private readonly price: number;
  
    // Constructor with default parameter values
    constructor(name: string = 'Default Product', price: number = 0) {
      // Use nullish coalescing to ensure a non-null/undefined name
      this.name = name ?? 'Default Product';
  
      // Use nullish coalescing to ensure a non-null/undefined price
      this.price = price ?? 0;
    }
  
    /**
     * Display information about the product.
     * @param {boolean} showPrice - Optional: Indicates whether to display the price.
     */
    displayInfo(showPrice: boolean = true): void {
      const priceInfo = showPrice ? ` - $${this.price.toFixed(2)}` : '';
      console.log(`Product: ${this.name}${priceInfo}`);
    }
  }
  
  // Example usage of the Product class
  const defaultProduct = new Product(); // Creating a product with default values
  const customProduct = new Product('Custom Product', 19.99); // Creating a product with custom values
  
  // Displaying information about the products
  defaultProduct.displayInfo(); // Outputs: Product: Default Product - $0.00
  defaultProduct.displayInfo(false); // Outputs: Product: Default Product
  
  customProduct.displayInfo(); // Outputs: Product: Custom Product - $19.99
  customProduct.displayInfo(false); // Outputs: Product: Custom Product
  