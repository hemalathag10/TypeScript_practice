//(UNION, NEVER, STRING LITERAL,TYPE ALIASES, TYPE INFERENCES)

// Define types for items in the store
type Book = {
  type: 'book'; // Discriminant property to distinguish book type
  id: number;
  title: string;
  author: string;
  price: number;
};

type Magazine = {
  type: 'magazine'; // Discriminant property to distinguish magazine type
  id: number;
  title: string;
  issueNumber: number;
  price: number;
};

// Union type for items in the store (Books or Magazines)
type StoreItem = Book | Magazine;

// Function to get the item description based on the type
let getItemDescription = (item: StoreItem): string => {
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
const storeItems: StoreItem[] = [
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
let calculateTotalPrice = (items: StoreItem[]): number => {
  // Use nullish coalescing operator to handle null or undefined
  const validItems = items ?? [];

  // Calculate the total price
  const totalPrice = validItems.reduce((total, item) => total + item.price, 0);

  return totalPrice;
};

// Calculate and display the total price
const totalPrice = calculateTotalPrice(storeItems);
console.log(`Total Price: $${totalPrice}`);
