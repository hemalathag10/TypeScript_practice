"use strict";
// Function with explicit type annotations
function calculateTotalCost(basePrice, ...discounts) {
    // Calculate total discount using the reduce method
    const totalDiscount = discounts.reduce((acc, discount) => acc + (discount !== null && discount !== void 0 ? discount : 0), 0);
    // Calculate the discounted price
    const discountedPrice = basePrice - totalDiscount;
    // Return the discounted price
    return discountedPrice;
}
// Example usage
const itemBasePrice = 100;
// Use the function to calculate the total cost with various discounts
const totalCost1 = calculateTotalCost(itemBasePrice, 10, 5, 8, 25);
const totalCost2 = calculateTotalCost(itemBasePrice, 15, 20);
// Output the results
console.log(`Item Base Price: $${itemBasePrice}`);
console.log(`Total Cost 1: $${totalCost1}`);
console.log(`Total Cost 2: $${totalCost2}`);
// Assign the function to a const with proper naming
const calculateTotalCostFunction = calculateTotalCost;
