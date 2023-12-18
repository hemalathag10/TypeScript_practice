import * as readlineSync from 'readline-sync';

// Function to calculate the discounted price
function calculateDiscountedPrice(productName: string, price: number, discountPercentage: number = 5): number {
    // Ensure discountPercentage is not null or undefined using nullish coalescing operator
    const actualDiscount = discountPercentage ?? 0;

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
