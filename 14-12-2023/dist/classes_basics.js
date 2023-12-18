"use strict";
// Class representing an E-commerce product
class ECommerceProduct {
    // Constructor with camelCase parameter names
    constructor(productName, price) {
        this.ProductName = productName;
        this.Price = price;
    }
    // Method to get product details
    getProductDetails() {
        var _a;
        // Return a formatted string with product details
        return `Product: ${this.ProductName}, Price: ${(_a = this.Price) !== null && _a !== void 0 ? _a : 'Price not specified'}`;
    }
    // Getter for product name
    get productName() {
        return this.ProductName;
    }
    // Getter for price with nullish operator
    get price() {
        var _a;
        return (_a = this.Price) !== null && _a !== void 0 ? _a : 0;
    }
}
// Example of using the E-commerce class
const product1 = new ECommerceProduct("Smartphone", 499.99);
// Access product details through the class method
console.log(product1.getProductDetails());
