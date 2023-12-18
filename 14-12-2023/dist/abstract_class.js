"use strict";
// Abstract class representing an E-commerce product
class ECommerceProduct {
    // Constructor with parameter names following camelCase convention
    constructor(productName, price) {
        this._productName = productName;
        this._price = price;
    }
    // Getter for product name
    get productName() {
        return this._productName;
    }
    // Getter for price with nullish operator
    get price() {
        var _a;
        return (_a = this._price) !== null && _a !== void 0 ? _a : 0;
    }
}
// Concrete class extending the abstract class
class ConcreteProduct extends ECommerceProduct {
    // Constructor calling the superclass constructor using 'super'
    constructor(productName, price, brand) {
        super(productName, price);
        this._brand = brand;
    }
    // Implementation of the abstract method
    getProductDetails() {
        // Return a string with product details including brand
        return `Product: ${this.productName}, Brand: ${this._brand}, Price: ${this.price}`;
    }
}
// Create an instance of the concrete product
const product1 = new ConcreteProduct("Smartphone", 499.99, "ABC");
// Access product details through the abstract class method
console.log(product1.getProductDetails());
