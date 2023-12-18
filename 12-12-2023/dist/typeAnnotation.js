"use strict";
// Function to get the item description based on the type
const getItemDescription = (item) => {
    // Use a switch statement to handle different item types
    switch (item.type) {
        // For Book type
        case 'book':
            return `Book: ${item.title} by ${item.author}`;
        // For Magazine type
        case 'magazine':
            return `Magazine: ${item.title}, Issue #${item.issueNumber}`;
    }
};
// Example usage
const storeItems = [
    { type: 'book', id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10 },
    { type: 'book', id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12 },
    { type: 'magazine', id: 3, title: 'National Geographic', issueNumber: 150, price: 5 },
];
// Display item descriptions
storeItems.forEach((item) => {
    const description = getItemDescription(item);
    console.log(description);
});
// Function to calculate the total price of items in the store
const calculateTotalPrice = (items) => {
    // Use nullish coalescing operator to handle null or undefined
    const validItems = items !== null && items !== void 0 ? items : [];
    // Calculate the total price
    const totalPrice = validItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
};
// Calculate and display the total price
const totalPrice = calculateTotalPrice(storeItems);
console.log(`Total Price: $${totalPrice}`);
