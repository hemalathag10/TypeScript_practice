// Abstract class representing an E-commerce product
abstract class ECommerceProduct {
    // Private fields with proper naming conventions
    private _productName: string;
    private _price: number;

    // Constructor with parameter names following camelCase convention
    constructor(productName: string, price: number) {
        this._productName = productName;
        this._price = price;
    }

    // Abstract method for getting product details
    abstract getProductDetails(): string;

    // Getter for product name
    get productName(): string {
        return this._productName;
    }

    // Getter for price with nullish operator
    get price(): number {
        return this._price ?? 0;
    }
}

// Concrete class extending the abstract class
class ConcreteProduct extends ECommerceProduct {
    // Additional property for the concrete product
    private _brand: string;

    // Constructor calling the superclass constructor using 'super'
    constructor(productName: string, price: number, brand: string) {
        super(productName, price);
        this._brand = brand;
    }

    // Implementation of the abstract method
    getProductDetails(): string {
        // Return a string with product details including brand
        return `Product: ${this.productName}, Brand: ${this._brand}, Price: ${this.price}`;
    }
}

// Create an instance of the concrete product
const product1 = new ConcreteProduct("Smartphone", 499.99, "ABC");

// Access product details through the abstract class method
console.log(product1.getProductDetails());
