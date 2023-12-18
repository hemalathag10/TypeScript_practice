// TYPE ANNOTATION
const userName: string = 'John';
const age: number = 25;
const names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

// OBJECT
const user: {
    username: string;
    userage: number;
} = {
    username: userName, // Fixed property names to match the type definition
    userage: age // Fixed property names to match the type definition
};
console.log(user.username, "  ", user.userage); // Fixed property names to match the type definition

// ARRAY
const employeeNames: string[] = [];
employeeNames.push("hema", "abc", "def");

for (const name of employeeNames) {
    console.log(name);
}

// REDUCE
// SHOPPING CART EXAMPLE
let cartItems: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    inStock: boolean;
}[] = [
    { id: 1, name: 'Laptop', price: 1200, quantity: 2, inStock: true },
    { id: 2, name: 'Mouse', price: 20, quantity: 1, inStock: false },
    { id: 3, name: 'Keyboard', price: 50, quantity: 3, inStock: true },
    { id: 4, name: 'Monitor', price: 300, quantity: 1, inStock: true },
];

// REDUCE: Calculate the total price of items in the shopping cart
let totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return currentItem.inStock ? accumulator + currentItem.price * currentItem.quantity : accumulator;
}, 0);
console.log("Total Price:", totalPrice);

// MAP: Update the quantity of each item in the shopping cart
let updatedQuantities = cartItems.map(item => ({ ...item, quantity: item.quantity + 1 }));
console.log("Updated Quantities:", updatedQuantities);

// FILTER: Remove items that are out of stock from the shopping cart
let inStockItems = cartItems.filter(item => item.inStock);
console.log("In Stock Items:", inStockItems);

// FOREACH
cartItems.forEach(item => {
    console.log(item);
});

// TUPLE
type CartItem = [string, number, number, boolean];
let cart_items: CartItem[] = [
    ['Laptop', 1200, 2, true],
    ['Mouse', 20, 1, false],
    ['Keyboard', 50, 3, true],
    ['Monitor', 300, 1, true],
];

// ENUM DEFINITION
enum ItemStatus {
    InStock = 'IN_STOCK',
    OutOfStock = 'OUT_OF_STOCK',
}

// INTERFACE FOR SHOPPING CART ITEM
interface CartItemInterface {
    product_name: string;
    price: number;
    quantity: number;
    status: ItemStatus;
}

// ARRAY OF SHOPPING CART ITEMS
let cartItemsInterface: CartItemInterface[] = [
    { product_name: 'Laptop', price: 1200, quantity: 2, status: ItemStatus.InStock },
    { product_name: 'Mouse', price: 20, quantity: 1, status: ItemStatus.OutOfStock },
    { product_name: 'Keyboard', price: 50, quantity: 3, status: ItemStatus.InStock },
    { product_name: 'Monitor', price: 300, quantity: 1, status: ItemStatus.InStock },
];

// FILTER: REMOVE ITEMS THAT ARE OUT OF STOCK FROM THE SHOPPING CART
let inStockItemsInterface: CartItemInterface[] = cartItemsInterface.filter(item => item.status === ItemStatus.InStock);
console.log("In Stock Items:", inStockItemsInterface);
