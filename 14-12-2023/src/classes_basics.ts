// Class representing an E-commerce product
class ECommerceProduct {
  // Private fields with camelCase naming conventions
  private ProductName: string;
  private Price: number;

  // Constructor with camelCase parameter names
  constructor(productName: string, price: number) {
    this.ProductName = productName;
    this.Price = price;
  }

  // Method to get product details
  getProductDetails(): string {
    // Return a formatted string with product details
    return `Product: ${this.ProductName}, Price: ${this.Price ?? 'Price not specified'}`;
  }

  // Getter for product name
  get productName(): string {
    return this.ProductName;
  }

  // Getter for price with nullish operator
  get price(): number {
    return this.Price ?? 0;
  }
}

// Example of using the E-commerce class
const product1 = new ECommerceProduct("Smartphone", 499.99);

// Access product details through the class method
console.log(product1.getProductDetails());
