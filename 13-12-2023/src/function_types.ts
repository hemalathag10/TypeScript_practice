// Function with explicit type annotations
function calculateTotalCost(basePrice: number, ...discounts: number[]): number {
    // Calculate total discount using the reduce method
    const totalDiscount = discounts.reduce((acc, discount) => acc + (discount ?? 0), 0);
  
    // Calculate the discounted price
    const discountedPrice = basePrice - totalDiscount;
  
    // Return the discounted price
    return discountedPrice;
  }
  
  // Example usage
  const itemBasePrice: number = 100;
  
  // Use the function to calculate the total cost with various discounts
  const totalCost1: number = calculateTotalCost(itemBasePrice, 10, 5, 8, 25);
  const totalCost2: number = calculateTotalCost(itemBasePrice, 15, 20);
  
  // Output the results
  console.log(`Item Base Price: $${itemBasePrice}`);
  console.log(`Total Cost 1: $${totalCost1}`);
  console.log(`Total Cost 2: $${totalCost2}`);
  
  
  // The inferred type
  type CalculateTotalCostFunction = (...args: number[]) => number;
  
  // Assign the function to a const with proper naming
  const calculateTotalCostFunction: CalculateTotalCostFunction = calculateTotalCost;
  