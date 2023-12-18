
// IF... ELSE STATEMENT

// Function to calculate shipping cost based on package weight
function calculateShippingCost(weight: number): string {
    // Use nullish coalescing operator to provide a default value if needed
    return weight <= 5 ? "Standard Shipping" : "Express Shipping";
}

// Package weights
const packageWeight1 = 3;
const packageWeight2 = 8;

// Display shipping method for each package
console.log(`Package with weight ${packageWeight1} will be shipped via ${calculateShippingCost(packageWeight1)}.`);
console.log(`Package with weight ${packageWeight2} will be shipped via ${calculateShippingCost(packageWeight2)}.`);


