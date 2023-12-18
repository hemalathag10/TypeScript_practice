"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Function to calculate the discounted price
function calculateDiscountedPrice(productName, price, discountPercentage = 5) {
    // Ensure discountPercentage is not null or undefined using nullish coalescing operator
    const actualDiscount = discountPercentage !== null && discountPercentage !== void 0 ? discountPercentage : 0;
    const discountedPrice = price - (price * actualDiscount) / 100;
    console.log(`Calculating discounted price for ${productName}...`);
    console.log(`Original Price: $${price}`);
    console.log(`Discount Percentage: ${actualDiscount}%`);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
}
// Example usage
const productName = "Laptop";
const productPrice = 1200;
// Get user input for discount percentage
const discountInput = readlineSync.question(`Enter the discount percentage for ${productName} (press Enter for default 5%): `);
// Parse user input as a number, or use the default value if not provided
const discountPercentage = parseFloat(discountInput) || undefined;
// Calculate and display the discounted price
const discountedPrice = calculateDiscountedPrice(productName, productPrice, discountPercentage);
console.log(`Final Price for ${productName}: $${discountedPrice}`);
